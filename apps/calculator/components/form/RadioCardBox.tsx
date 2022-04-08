import { Label, RadioCardProps, RadioCard, Emoji } from "ui";
import { QuestionSelectOptions } from "../../types/schema";

interface Props extends RadioCardProps {
  label: string;
  options: QuestionSelectOptions;
  hideLabel?: boolean;
}

const RadioCardBox = ({
  id,
  hideLabel,
  label,
  options,
  defaultValue,
  ...props
}: Props) => {
  return (
    <div className="flex flex-col">
      {!hideLabel ? <Label htmlFor={id}>{label}</Label> : null}
      <div className="flex flex-wrap space-x-3">
        {Object.entries(options).map(([k, o]) => (
          <RadioCard
            key={k}
            name={id}
            id={k}
            value={k}
            defaultChecked={defaultValue === k}
            {...props}
          >
            {o.label}{" "}
            <Emoji label={o.label} className="ml-2">
              {o.emoji}
            </Emoji>
          </RadioCard>
        ))}
      </div>
    </div>
  );
};

export default RadioCardBox;
