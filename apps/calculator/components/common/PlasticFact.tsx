import React, { FC, HTMLAttributes } from "react";
import { Emoji, Text } from "ui";
import cn from "classnames";
import { plasticFacts } from "../../config/plastic-facts";

interface Props extends HTMLAttributes<HTMLDivElement> {
  // TODO: use ids to get the facts instead of passing all the props
  fact?: keyof typeof plasticFacts;
}

const PlasticFact = ({ fact, className }: Props) => {
  const { label, emoji, text } = plasticFacts[fact];
  return (
    <div className={cn("flex space-x-3 items-center", className)}>
      <Emoji label={label} className="p-2 rounded-full bg-gray-100">
        {emoji}
      </Emoji>
      <Text>{text}</Text>
    </div>
  );
};

export default PlasticFact;
