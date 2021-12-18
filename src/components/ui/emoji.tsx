import React from "react";

interface EmojiProps {
  label?: string;
  symbol: string;
}
const Emoji = ({ label, symbol }: EmojiProps) => {
  return (
    <span role="img" aria-label={label || ""} aria-hidden={!label}>
      {symbol}
    </span>
  );
};

export default Emoji;
