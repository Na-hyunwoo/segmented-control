import React, { Dispatch, SetStateAction } from "react";
import { SegmentedControls } from "../lib";

export default {
  title: "SegmentedControls",
  component: SegmentedControls,
};

interface Props {
  options: {
    value: string;
    disabled?: boolean;
  }[];
  setValue: Dispatch<SetStateAction<string>>;
  size: "large" | "small";
  name: string;
  defaultIndex: number;
}

const Template = (args: Props) => <SegmentedControls {...args} />;

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
