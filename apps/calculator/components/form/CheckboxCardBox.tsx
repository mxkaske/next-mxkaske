import { Label, CheckboxCardProps, CheckboxCard, Emoji } from "ui";
import { QuestionSelectOptions } from "../../types/schema";

interface Props extends CheckboxCardProps {
  label: string;
  options: QuestionSelectOptions;
  hideLabel?: boolean;
}

const CheckboxCardBox = ({
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
          <CheckboxCard
            key={k}
            name={k}
            id={k}
            value={k}
            defaultChecked={
              Array.isArray(defaultValue) && defaultValue.includes(k)
            }
            {...props}
          >
            {o.label}{" "}
            <Emoji label={o.label} className="ml-2">
              {o.emoji}
            </Emoji>
          </CheckboxCard>
        ))}
      </div>
    </div>
  );
};

export default CheckboxCardBox;
