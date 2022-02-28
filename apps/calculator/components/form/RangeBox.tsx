import { Label, Range, RangeProps } from "ui";

const RangeBox = ({ id, ...props }: RangeProps) => {
  return (
    <div>
      <Label htmlFor={id}>{id}</Label>
      <Range name={id} id={id} {...props} />
    </div>
  );
};

export default RangeBox;
