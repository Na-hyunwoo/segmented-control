import React from "react";
import { SegmentedControls } from "../lib";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "SegmentedControls",
  component: SegmentedControls,
} as ComponentMeta<typeof SegmentedControls>;

const Template: ComponentStory<typeof SegmentedControls> = (args) => <SegmentedControls {...args} />;

export const ThreeSegments = Template.bind({});
ThreeSegments.args = {
  options: [
    { value: "one", disabled: true },
    { value: "two" },
    { value: "three" },
  ],
  defaultIndex: 1,
  setValue: (val: string) => console.log(val),
  size: "large",
  name: "three",
};

export const FourSegments = Template.bind({});
FourSegments.args = {
  options: [
    { value: "one" },
    { value: "two" },
    { value: "three" },
    { value: "four", disabled: true },
  ],
  defaultIndex: 2,
  setValue: (val: string) => console.log(val),
  size: "small",
  name: "four",
};
