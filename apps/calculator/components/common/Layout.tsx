import React, { FC, ReactNode } from "react";
import cn from "classnames";

interface Props {
  className?: string;
  leftSide?: ReactNode;
  rightSide?: ReactNode;
}

const Layout: FC<Props> = ({ children, leftSide, rightSide, className }) => {
  return (
    <main className="relative">
      {leftSide ? (
        <aside className="absolute inset-y-0 left-0 hidden lg:block">
          {leftSide}
        </aside>
      ) : null}
      <div
        className={cn(
          "max-w-lg py-3 px-2 mx-auto min-h-screen flex flex-col space-y-3",
          className
        )}
      >
        {children}
      </div>
      {rightSide ? (
        <aside className="absolute inset-y-0 right-0 hidden lg:block">
          {rightSide}
        </aside>
      ) : null}
    </main>
  );
};

export default Layout;
