import * as React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: "default" | "primary" | "secondary";
}
const Input = ({ variant, className, ...props }: InputProps) => {
  return (
    <input
      className="px-3 py-2 text-black bg-transparent border border-gray-300 rounded-md dark:text-white hover:border-gray-400 dark:hover:border-gray-600 dark:border-gray-700"
      {...props}
    />
  );
};

Input.defaultProps = {
  variant: "default",
};

export default Input;
