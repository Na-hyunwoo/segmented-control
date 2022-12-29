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
/**
 *
 * @param {{ value: string, disabled?: boolean }[]} props.options 세그먼트의 옵션을 value에 담아주세요. 비활성화 하길 원하는 버튼은 disabled 속성을 적용해주세요.
 * @param { Dispatch<SetStateAction<string>> } props.setValue 선택된 세그먼트를 string으로 리턴해요
 * @param { "large" | "small" } props.size 세그먼트의 크기를 정해주세요. large 혹은 small의 값을 가져요.
 * @param { string } props.name input의 name값을 넣어주세요. 웹 접근성을 위함이에요.
 * @param { defaultIndex } props.number 처음 선택되어있길 원하는 값을 넣어주세요.
 * @example
 * ```jsx
  import React from "react";
  import { SegmentedControls } from "segmented-controls-react";

  const App = () => {
    return (
      <>
        <SegmentedControls
          options={[
            { value: "one", disabled: true },
            { value: "two" },
            { value: "three" },
          ]}
          defaultIndex={1}
          setValue={(val) => console.log(val)}
          size={"large"}
          name={"one"}
        />
      </>
    );
  };

  export default App;
 * ```
 */
declare const SegmentedControls: ({ options, setValue, size, name, defaultIndex, }: Props) => JSX.Element;
export default SegmentedControls;
