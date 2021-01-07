import React from "react";
import Tag, { TagCollection } from "./tag";
import { techStack } from "../config";
import Emoji from "./emoji";

const TechStack = () => {
  return (
    <div>
      <h2>
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
      <TagCollection tags={techStack.mobile} className="mb-2 text-xs" />
      <h3>Web Development</h3>
      <TagCollection tags={techStack.web} className="mb-2 text-xs" />
      <h3>Backend Development</h3>
      <TagCollection tags={techStack.backend} className="mb-2 text-xs" />
      <p>
        Of course <Tag label="typescript" className="text-xs" /> and
        <Tag label="ES6" className="text-xs" /> should not miss. <br />
        My personal focus in 2021 will be more Backend Development without
        negliciating the other domains.
      </p>
    </div>
  );
};

export default TechStack;
