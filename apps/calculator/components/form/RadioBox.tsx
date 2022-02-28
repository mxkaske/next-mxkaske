import { Label, RadioProps, Radio } from "ui";
import { QuestionSelectOptions } from "../../types/schema";

const RadioBox = ({
  id,
  options,
  defaultValue,
  ...props
}: RadioProps & QuestionSelectOptions) => {
  return (
    <div className="flex flex-col">
      <Label>{id}</Label>
      <div className="flex flex-wrap space-x-3">
        {Object.entries(options).map(([k, o]) => (
          <div key={k} className="space-x-2">
            <Label htmlFor={k}>{o.label}</Label>
            <Radio
              name={id}
              id={k}
              value={o.value}
              defaultChecked={defaultValue == o.value}
              {...props}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioBox;
