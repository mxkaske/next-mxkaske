import Layout from "@/components/common/layout";
// import { AutoComplete } from "ui";
import React from "react";
import cn from "classnames";

const keywords = ["bullet", "bun", "h1", "h2", "h3"];

const AutoCompleteRoute = () => {
  const [currentValue, setCurrentValue] = React.useState<string>(undefined);
  const [position, setPosition] = React.useState({
    top: 0,
    left: 0,
    relTop: 0,
    relLeft: 0,
    width: 0,
    height: 0,
  });
  const ref = React.useRef<HTMLTextAreaElement>(null);
  const phantomRef = React.useRef<HTMLDivElement>(null);
  const items = keywords.filter((keyword) => keyword.startsWith(currentValue));

  const removeChildren = () => {
    while (phantomRef.current.hasChildNodes()) {
      phantomRef.current.removeChild(phantomRef.current.lastChild);
    }
  };

  const refreshContent = (value: string) => {
    removeChildren();
    /*clone a single span, put a letter in it and append*/
    const span = document.createElement("span");
    value.split("").forEach((i) => {
      span.textContent = i;
      phantomRef.current.appendChild(span.cloneNode(true));
    });
  };
  console.log(position);
  return (
    <Layout className="space-y-4">
      <div className="relative inline-block">
        <textarea
          ref={ref}
          className="relative inline-block left-0 top-0 border rounded w-full text-lg p-0 bg-transparent"
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            const value = event.target.value;
            const lastWord = value.split(" ").pop()?.replace(" ", "") ?? "";
            const isSlash = lastWord.startsWith("/");
            if (isSlash && lastWord.length > 1) {
              setCurrentValue(lastWord.slice(1));
              refreshContent(value);

              const index = event.target.selectionStart - lastWord.length + 1;
              console.log(index, phantomRef.current.children.length);
              // index should be overwritten in case of
              const textAreaRect = event.target.getBoundingClientRect();
              const charRect =
                phantomRef.current.children[index - 1].getBoundingClientRect();

              setPosition({
                top: charRect.top,
                left: charRect.left,
                relTop: charRect.top - textAreaRect.top,
                relLeft: charRect.left - textAreaRect.left,
                width: charRect.width,
                height: charRect.height,
              });
            } else {
              setCurrentValue(undefined);
              setPosition({
                top: 0,
                left: 0,
                relTop: 0,
                relLeft: 0,
                width: 0,
                height: 0,
              });
            }
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
            if (e.key === "/") {
              console.log("slash");
            }
          }}
          rows={10}
        />
        <div
          ref={phantomRef}
          className="absolute top-0 left-0 -z-20 word-break inline-block h-full w-full bg-green-500 opacity-30 border rounded"
        />
        <div
          className={`absolute w-12 h-12 -z-10 bg-red-300`}
          style={{
            left: `${position.relLeft}px`,
            top: `${position.relTop + position.height}px`,
          }}
        >
          <ul>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default AutoCompleteRoute;
