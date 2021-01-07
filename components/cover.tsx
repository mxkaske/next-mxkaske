import React from "react";
import Container from "./container";
import Emoji from "./emoji";
import Tag from "./tag";

const Cover = () => {
  return (
    <div className="pt-12 bg-primary-200 h-160 max-h-screen">
      <Container className="h-full flex justify-between">
        <div className="flex flex-col">
          <div className="flex flex-col flex-1 justify-center max-w-lg">
            <div>
              <h3 className="px-1 bg-primary-600 text-white inline-block">
                If you run, you may stumble some day.
              </h3>
            </div>
            <div>
              <h3 className="px-1 bg-primary-600 text-white inline-block">
                If you stay, others will surpass you.
              </h3>
            </div>
            <div>
              <h3 className="px-1 bg-primary-600 text-white inline-block">
                Find a reasonable speed to move forward!
              </h3>
            </div>
          </div>
          <div>
            <h1>
              Hi, I'm Max <Emoji symbol="👋" label="waving hand" />
            </h1>
            <h3>
              I'm a <Tag label="JavaScript" /> Mobile and Frontend Developer
              with the focus on the React Ecosystem.
            </h3>
          </div>
        </div>
        <div>
          <img src="/max.svg" style={{ height: 500, width: 500 }} />
        </div>
      </Container>
    </div>
  );
};

export default Cover;
