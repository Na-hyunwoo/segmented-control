import { Dispatch, SetStateAction } from "react";
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
declare const SegmentedControls: ({
  options,
  setValue,
  size,
  name,
  defaultIndex,
}: Props) => JSX.Element;
export default SegmentedControls;
