import React from "react";
import { Input, Label, Range, Select } from "ui";
import useActiveSector from "../hooks/useActiveSector";
import { Question } from "../types/schema";

interface Props {
  id: string; // key is protected
  value: Question;
}

const QuestionCard = ({ id, value }: Props) => {
  const { sector, setSector } = useActiveSector();
  const defaultValue = sector?.[id];
  switch (value.type) {
    case "select": {
      // README: value is from type QuestionInput thanks to "Discriminated Unions"
      // https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions
      return (
        <div className="flex flex-col">
          <Label htmlFor={id}>{id}</Label>
          <Select
            name={id}
            id={id}
            defaultValue={defaultValue}
            onChange={(e) => setSector({ ...sector, [id]: e.target.value })}
          >
            {Object.entries(value.options).map(([k, o]) => {
              return (
                <option key={k} id={k} value={k}>
                  {o.label}
                </option>
              );
            })}
          </Select>
        </div>
      );
    }
    case "input": {
      return (
        <div className="flex flex-col">
          <Label htmlFor={id}>{id}</Label>
          <Input
            name={id}
            id={id}
            // TODO: use granular access to input type "text" | "number" inside QuestionInput
            type={"number"}
            defaultValue={defaultValue}
            onChange={(e) => setSector({ [id]: e.target.value })}
          />
        </div>
      );
    }
    case "range": {
      return (
        <div>
          <Label htmlFor={id}>{id}</Label>
          <Range
            name={id}
            id={id}
            defaultValue={defaultValue}
            onChange={(e) => setSector({ [id]: e.target.value })}
          />
        </div>
      );
    }
    default:
      return null;
  }
};

export default QuestionCard;
