import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Heading from "./heading";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const StoryHeading = {
  title: "Example/Heading",
  component: Heading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Heading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: "Default Heading",
};

export default StoryHeading;
