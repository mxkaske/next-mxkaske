import { Select, Label, SelectProps } from "ui";
import { QuestionSelectOptions } from "../../types/schema";

interface Props extends SelectProps {
  label: string;
  options: QuestionSelectOptions;
}

const SelectBox = ({ id, label, options, ...props }: Props) => {
  return (
    <div className="flex flex-col">
      <Label htmlFor={id}>{label}</Label>
      <Select name={id} id={id} {...props}>
        {Object.entries(options).map(([k, o]) => {
          return (
            <option key={k} id={k} value={k}>
              {o.label}
            </option>
          );
        })}
      </Select>
    </div>
  );
};

export default SelectBox;
