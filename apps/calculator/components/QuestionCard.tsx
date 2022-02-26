import React from "react";
import { Input, Label, Range, Select } from "ui";
import { useLocalStorage } from "usehooks-ts";
import {
  Question,
  QuestionInput,
  QuestionRange,
  QuestionSelect,
} from "../types/schema";

interface Props {
  id: string;
  value: Question;
}

const QuestionCard = ({ id, value }: Props) => {
  const [form, setForm] = useLocalStorage<Record<string, string>>("form", {}); // type
  const defaultValue = form[id];
  const { type } = value;
  switch (type) {
    case "select": {
      const q = value as QuestionSelect;
      return (
        <div className="flex flex-col">
          <Label htmlFor={id}>{id}</Label>
          <Select
            name={id}
            id={id}
            defaultValue={defaultValue}
            onChange={(e) => setForm({ ...form, [id]: e.target.value })}
          >
            {Object.entries(q.options).map(([k, o]) => {
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
      // const q = value as QuestionInput;
      return (
        <div className="flex flex-col">
          <Label htmlFor={id}>{id}</Label>
          <Input
            name={id}
            id={id}
            // TODO: use granular access to input type "text" | "number" inside QuestionInput
            type={"number"}
            defaultValue={defaultValue}
            onChange={(e) => setForm({ ...form, [id]: e.target.value })}
          />
        </div>
      );
    }
    case "range": {
      // const q = value as QuestionRange;
      return (
        <div>
          <Label htmlFor={id}>{id}</Label>
          <Range
            name={id}
            id={id}
            defaultValue={defaultValue}
            onChange={(e) => setForm({ ...form, [id]: e.target.value })}
          />
        </div>
      );
    }
    default:
      const _exhaustiveCheck: never = type;
      return _exhaustiveCheck;
  }
};

export default QuestionCard;
