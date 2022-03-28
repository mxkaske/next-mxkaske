import * as React from "react";
import cn from "classnames";

const styles = {
  h1: "mb-4 text-3xl font-bold",
  h2: "mb-3 text-2xl font-semibold",
  h3: "mb-2 text-xl font-semibold",
  h4: "mb-1 text-lg font-medium",
};

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4";
}

const Heading: React.FC<HeadingProps> = ({
  as: element = "h2",
  children,
  className,
  ...props
}) => {
  const Component = (
    componentProps: React.HTMLAttributes<HTMLHeadingElement>
  ) => React.createElement(element, componentProps, children);
  return (
    <Component className={cn(styles[element], className)} {...props}>
      {children}
    </Component>
  );
};

export default Heading;
