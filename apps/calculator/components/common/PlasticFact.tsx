import React, { FC, HTMLAttributes } from "react";
import { Emoji, Text } from "ui";
import cn from "classnames";
import { plasticFacts } from "../../config/plastic-facts";
import { marked } from "marked";
// missing ts support, check `npm i --save-dev @types/marked`

interface Props extends HTMLAttributes<HTMLDivElement> {
  fact?: keyof typeof plasticFacts;
}

const PlasticFact = ({ fact, className }: Props) => {
  const { label, emoji, text } = plasticFacts[fact];
  return (
    <div className={cn("flex space-x-3 items-center", className)}>
      <div className="rounded-full bg-gray-100 dark:bg-gray-900 flex items-center">
        <Emoji label={label} className="p-[6px]">
          {emoji}
        </Emoji>
      </div>
      {/* <Text>{text}</Text> */}
      <div dangerouslySetInnerHTML={{ __html: marked.parse(text) }} />
    </div>
  );
};

export default PlasticFact;