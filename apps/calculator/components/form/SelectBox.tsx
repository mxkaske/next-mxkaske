import { Select, Label, SelectProps } from "ui";
import { QuestionSelectOptions } from "../../types/schema";

interface Props extends SelectProps {
  label: string;
  options: QuestionSelectOptions;
  hideLabel?: boolean;
}

const SelectBox = ({
  id,
  label,
  hideLabel = false,
  options,
  ...props
}: Props) => {
  return (
    <div className="flex flex-col">
      {!hideLabel ? <Label htmlFor={id}>{label}</Label> : null}
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
