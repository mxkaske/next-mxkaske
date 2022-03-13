import React, { FC, ReactNode } from "react";
import cn from "classnames";

interface Props {
  className?: string;
  aside?: ReactNode;
}

const Layout: FC<Props> = ({ children, aside, className }) => {
  return (
    <main className="relative">
      {aside ? (
        <aside className="absolute inset-y-0 left-0 hidden lg:block">
          {aside}
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
    </main>
  );
};

export default Layout;
