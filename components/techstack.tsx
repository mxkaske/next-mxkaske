import React from "react";
import Tag, { TagCollection } from "./tag";
import { techStack } from "../config";
import Emoji from "./emoji";

const TechStack = () => {
  return (
    <div className="mt-2">
      <h2 className="text-center">
        Tech Stack <Emoji symbol="📚" label="books" />
      </h2>
      <p>
        There will never be the best way to create a project. I'm always open
        minded for new frameworks and libraries.
      </p>
      <p className="mb-3">
        The belowed tags are libraries/frameworks where I feel confident with!
      </p>
      <h3>Mobile Development</h3>
      <TagCollection tags={techStack.mobile} className="mb-4 text-xs" />
      <h3>Web Development</h3>
      <TagCollection tags={techStack.web} className="mb-4 text-xs" />
      <h3>Backend Development</h3>
      <TagCollection tags={techStack.backend} className="mb-4 text-xs" />
      <p>
        I'm working with <Tag label="TypeScript" /> and <Tag label="ES6" />.
      </p>
    </div>
  );
};

export default TechStack;
