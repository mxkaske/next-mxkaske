import React from "react";
import Container from "./container";
import Emoji from "../ui/emoji";
import Tag from "../ui/tag";
import Image from "next/image";

const motto = [
  "If you run, you may stumble some day",
  "If you stay, others will surpass you",
  "Find a reasonable speed to move forward",
];

const Cover = () => {
  return (
    <div className="pt-12 bg-primary-100 dark:bg-neutral-600">
      <Container className="flex justify-between h-full md:flex-column">
        <div className="flex flex-col flex-1">
          <div className="flex flex-col justify-between flex-1 my-4 md:flex-row">
            <div className="flex flex-col justify-center flex-1 max-w-lg">
              {motto.map((text, index) => (
                <div key={index} className="mb-2">
                  <h3
                    key={index}
                    className="inline px-1 py-1 text-white bg-primary-600"
                  >
                    {text}
                  </h3>
                </div>
              ))}
            </div>
            <div className="self-end">
              <Image
                src={"/max.svg"}
                height={350}
                width={400}
                alt="max profile"
              />
            </div>
          </div>
          <div>
            <h1>
              Hi, I'm Max <Emoji symbol="👋" label="waving hand" />
            </h1>
            <p className="text-xl">
              I'm a <Tag label="JavaScript" /> Mobile and Frontend Developer.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cover;
