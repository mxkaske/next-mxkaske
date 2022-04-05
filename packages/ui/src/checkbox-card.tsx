import * as React from "react";
import cn from "classnames";

const styles = {
  base: "inline-flex items-center px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none",
  checked: "peer-checked:bg-gray-900 peer-checked:text-white",
  focus: "peer-focus:ring-gray-900 peer-focus:ring-2 peer-focus:ring-offset-2",
};

export interface CheckboxCardProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
}

const CheckboxCard = ({
  children,
  name,
  className,
  containerClassName,
  type = "checkbox",
  ...props
}: CheckboxCardProps) => {
  return (
    <div className={containerClassName}>
      <input
        id={name}
        className={"sr-only peer"}
        {...{ type, name, ...props }}
      />
      <label
        htmlFor={name}
        className={cn(styles.base, styles.checked, styles.focus, className)}
      >
        {children}
      </label>
    </div>
  );
};

export default CheckboxCard;
