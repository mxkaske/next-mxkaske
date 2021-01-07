import React from "react";

interface EmojiProps {
  label?: string;
  symbol: string;
}
const Emoji = ({ label, symbol }: EmojiProps) => {
  return (
    <span
      role="img"
      aria-label={label || ""}
      aria-hidden={label ? "false" : "true"}
    >
      {symbol}
    </span>
  );
};

export default Emoji;
