import { Select, Label, SelectProps } from "ui";
import { QuestionSelectOptions } from "../../types/schema";

const SelectBox = ({
  id,
  options,
  ...props
}: SelectProps & QuestionSelectOptions) => {
  return (
    <div className="flex flex-col">
      <Label htmlFor={id}>{id}</Label>
      <Select id={id} {...props}>
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
