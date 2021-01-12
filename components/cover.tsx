import React from "react";
import Container from "./container";
import Emoji from "./emoji";
import Tag from "./tag";
import Image from "next/image";

const motto = [
  "If you run, you may stumble some day",
  "If you stay, others will surpass you",
  "Find a reasonable speed to move forward",
];

const Cover = () => {
  return (
    <div className="pt-12 bg-primary-100 dark:bg-neutral-600">
      <Container className="h-full flex md:flex-column justify-between">
        <div className="flex flex-col flex-1">
          <div className="flex flex-col md:flex-row flex-1 justify-between my-4">
            <div className="flex flex-col flex-1 justify-center max-w-lg">
              {motto.map((text, index) => (
                <div key={index} className="mb-2">
                  <h3
                    key={index}
                    className="py-1 px-1 bg-primary-600 text-white inline"
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
