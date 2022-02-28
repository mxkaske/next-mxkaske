import { Input, InputProps, Label } from "ui";

const InputBox = ({ id, ...props }: InputProps) => {
  return (
    <div className="flex flex-col">
      <Label htmlFor={id}>{id}</Label>
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
