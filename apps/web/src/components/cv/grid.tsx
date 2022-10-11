import React from "react";
import cn from "classnames";

const styles = {
  border: "border-gray-300/50 dark:border-gray-700/50",
};

const Grid = ({ children }: { children?: React.ReactNode }) => {
  return <div className="grid md:grid-cols-4">{children}</div>;
};

const Left = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "md:border-r md:pr-6 md:text-right md:col-span-1 pb-1 md:pb-6",
        styles.border
      )}
    >
      {children}
    </div>
  );
};

const Right = ({ children }: { children?: React.ReactNode }) => {
  return <div className={cn("md:col-span-3 md:pl-6 mb-6")}>{children}</div>;
};

Grid.Left = Left;
Grid.Right = Right;

export default Grid;
