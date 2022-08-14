import { Label, RadioProps, Radio } from "ui";
import { QuestionSelectOptions } from "../../types/schema";

interface Props extends RadioProps {
  label: string;
  options: QuestionSelectOptions;
  hideLabel?: boolean;
}

const RadioBox = ({
  id,
  label,
  hideLabel,
  options,
  defaultValue,
  ...props
}: Props) => {
  return (
    <div className="flex flex-col">
      {!hideLabel ? <Label htmlFor={id}>{label}</Label> : null}
      <div className="flex flex-wrap">
        {Object.entries(options).map(([k, o]) => (
          <div key={`${id}-${k}`} className="space-x-2 mr-3 mb-3">
            <Label htmlFor={k}>{o.label}</Label>
            <Radio
              name={id}
              id={k}
              value={k}
              defaultChecked={defaultValue === k}
              {...props}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioBox;
