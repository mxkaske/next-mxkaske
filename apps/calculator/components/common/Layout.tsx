import React, { FC } from "react";
import cn from "classnames";
import SectorNav from "../navigation/SectorNav";

interface Props {
  className?: string;
}

const Layout: FC<Props> = ({ children, className }) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="max-w-lg mx-auto relative">
        <SectorNav />
      </div>
      <main
        className={cn(
          "flex-1 max-w-lg w-full py-3 px-2 mx-auto flex flex-col space-y-3",
          className
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
