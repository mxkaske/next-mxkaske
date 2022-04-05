import React, { FC, HTMLAttributes } from "react";
import { Emoji, Text } from "ui";
import cn from "classnames";

interface Props extends HTMLAttributes<HTMLDivElement> {
  emoji: string;
  label?: string;
}

const PlasticFact: FC<Props> = ({ emoji, label, children, className }) => {
  return (
    <div className={cn("flex space-x-3 items-center", className)}>
      <Emoji label={label} className="p-2 rounded-full bg-gray-100">
        {emoji}
      </Emoji>
      <Text>{children}</Text>
    </div>
  );
};

export default PlasticFact;
