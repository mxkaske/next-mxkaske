import * as React from "react";
import cn from "classnames";

export interface RangeProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Range: React.FC<RangeProps> = ({ children, className, ...props }) => {
  const ref = React.useRef<HTMLInputElement>(null);
  return (
    <>
      <input
        ref={ref}
        type="range"
        className={cn(
          "w-full h-2 bg-gray-300 rounded appearance-none",
          className
        )}
        {...props}
      />
      <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
        <span className="font-medium">Value:</span> {ref.current?.value}
      </p>
    </>
  );
};

export default Range;
