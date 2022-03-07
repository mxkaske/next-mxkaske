import { Label, Range, RangeProps } from "ui";

interface Props extends RangeProps {
  label: string;
}

const RangeBox = ({ id, label, ...props }: Props) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Range name={id} id={id} {...props} />
    </div>
  );
};

export default RangeBox;
