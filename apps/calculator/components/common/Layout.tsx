import React, { FC } from "react";
import cn from "classnames";

interface Props {
  className?: string;
}

const Layout: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "max-w-lg py-3 px-2 mx-auto min-h-screen flex flex-col space-y-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Layout;
