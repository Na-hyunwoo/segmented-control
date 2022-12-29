import { Dispatch, SetStateAction } from "react";


export interface Props {
  options: {
    value: string;
    disabled?: boolean;
  }[];
  setValue: Dispatch<SetStateAction<string>>;
  size: "large" | "small";
  name: string;
  defaultIndex: number;
}