import { Label, CheckboxProps, Checkbox } from "ui";
import { QuestionSelectOptions } from "../../types/schema";

interface Props extends CheckboxProps {
  label: string;
  options: QuestionSelectOptions;
}

const CheckboxBox = ({ id, label, options, defaultValue, ...props }: Props) => {
  return (
    <div className="flex flex-col">
      <Label id={id}>{label}</Label>
      <div className="flex flex-wrap space-x-3">
        {Object.entries(options).map(([k, o]) => (
          <div key={k} className="space-x-2">
            <Label htmlFor={k}>{o.label}</Label>
            <Checkbox
              name={id}
              id={k}
              value={k}
              defaultChecked={
                Array.isArray(defaultValue) && defaultValue.includes(k)
              }
              {...props}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxBox;
