import React from "react";
import useActiveSector from "../../hooks/useActiveSector";
import { Question } from "../../types/schema";
import CheckboxBox from "../form/CheckboxBox";
import InputBox from "../form/InputBox";
import RadioBox from "../form/RadioBox";
import RangeBox from "../form/RangeBox";
import SelectBox from "../form/SelectBox";

interface Props {
  id: string; // key is protected
  value: Question;
}

// TODO: rename and refactor.. something like GeneratedForm
const FormElement = ({ id, value }: Props) => {
  const { sector, setSector } = useActiveSector();
  const defaultValue = sector?.[id];
  switch (value.type) {
    case "select": {
      // README: value is from type QuestionInput thanks to "Discriminated Unions"
      // https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions
      return (
        <SelectBox
          id={id}
          label={value.label}
          defaultValue={defaultValue || value.defaultValue}
          onChange={(e) => setSector({ [id]: e.target.value })}
          options={value.options}
        />
      );
    }
    case "radio": {
      return (
        <RadioBox
          id={id}
          label={value.label}
          defaultValue={defaultValue || value.defaultValue}
          onChange={(e) => setSector({ [id]: e.target.value })}
          options={value.options}
        />
      );
    }
    case "input": {
      return (
        <InputBox
          id={id}
          label={value.label}
          defaultValue={defaultValue || value.defaultValue}
          onChange={(e) => setSector({ [id]: e.target.value })}
        />
      );
    }
    case "range": {
      return (
        <RangeBox
          id={id}
          label={value.label}
          defaultValue={defaultValue || value.defaultValue}
          onChange={(e) => setSector({ [id]: e.target.value })}
        />
      );
    }
    case "checkbox": {
      return (
        <CheckboxBox
          id={id}
          label={value.label}
          options={value.options}
          defaultValue={defaultValue || value.defaultValue}
          onChange={(e) => {
            const items = sector?.[id];
            if (!e.target.checked && Array.isArray(items)) {
              setSector({
                [id]: items.filter((i) => {
                  return i !== e.target.value;
                }),
              });
            } else if (Array.isArray(items)) {
              setSector({
                [id]: [...items, e.target.value],
              });
            } else {
              setSector({ [id]: [e.target.value] });
            }
          }}
        />
      );
    }
    default:
      const _exhaustiveCheck: never = value;
      return _exhaustiveCheck;
  }
};

export default FormElement;
