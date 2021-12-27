import React, { FC, HTMLAttributes } from "react";
import cn from "classnames";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4";
}

const Heading: FC<Props> = ({
  as: element = "h2",
  children,
  className,
  ...props
}) => {
  const Component = (componentProps: HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(element, componentProps, children);

  const rootClassName = cn(
    {
      "mb-4 text-3xl font-bold": element === "h1",
      "mb-3 text-2xl font-semibold": element === "h2",
      "mb-2 text-xl font-semibold": element === "h3",
      "mb-1 text-lg font-medium": element === "h4",
    },
    className
  );

  return (
    <Component className={rootClassName} {...props}>
      {children}
    </Component>
  );
};

export default Heading;
