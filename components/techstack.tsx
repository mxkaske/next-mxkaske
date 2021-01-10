import React from "react";
import Tag, { TagCollection } from "./tag";
import { techStack } from "../config";
import Emoji from "./emoji";

const TechStack = () => {
  return (
    <div className="mt-4">
      <h2 className="text-center">
        Tech Stack <Emoji symbol="📚" label="books" />
      </h2>
      <div className="flex flex-wrap -mx-4">
        <div className="flex flex-col w-full md:w-(1/2-8) m-4 rounded-xl p-4">
          <div className="flex-1 flex flex-col justify-center">
            <p>
              There will never be the best way to create a project. I'm always
              open minded for new frameworks and libraries.
            </p>
            <p className="mb-3">
              The belowed tags are libraries/frameworks where I feel confident
              with!
            </p>
            <p>
              I'm working with <Tag label="TypeScript" className="text-xs" />{" "}
              and <Tag label="ES6" className="text-xs" />.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-(1/2-8) m-4 rounded-xl p-4">
          <div className="flex-1">
            <h3>Mobile Development</h3>
            <TagCollection tags={techStack.mobile} className="mb-2 text-xs" />
            <h3>Web Development</h3>
            <TagCollection tags={techStack.web} className="mb-2 text-xs" />
            <h3>Backend Development</h3>
            <TagCollection tags={techStack.backend} className="mb-2 text-xs" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
