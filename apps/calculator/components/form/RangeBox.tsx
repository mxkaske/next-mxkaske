import { Label, Range, RangeProps } from "ui";

interface Props extends RangeProps {
  label: string;
  hideLabel?: boolean;
}

const RangeBox = ({ id, hideLabel = false, label, ...props }: Props) => {
  return (
    <div>
      {!hideLabel ? <Label htmlFor={id}>{label}</Label> : null}
      <Range name={id} id={id} {...props} />
    </div>
  );
};

export default RangeBox;
