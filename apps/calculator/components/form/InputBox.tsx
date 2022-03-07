import { Input, InputProps, Label } from "ui";

interface Props extends InputProps {
  label: string;
}

const InputBox = ({ id, label, ...props }: Props) => {
  return (
    <div className="flex flex-col">
      <Label htmlFor={id}>{label}</Label>
      <Input
        name={id}
        id={id}
        // TODO: use granular access to input type "text" | "number" inside QuestionInput
        type={"number"}
        {...props}
      />
    </div>
  );
};

InputBox.defaultProps = {
  variant: "default",
};

export default InputBox;
