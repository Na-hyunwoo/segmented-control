import React, { Dispatch, SetStateAction, useId, useState } from "react";
import { spring } from "../styles";
import {
  Wrapper,
  Input,
  MotionLabel,
  MotionWrapper,
  SelectedBg,
} from "./styled";

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
const SegmentedControls = ({
  options,
  setValue,
  size,
  name,
  defaultIndex,
}: Props): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState<number>(defaultIndex);
  const [tappingIndex, setTappingIndex] = useState<number>(-1);
  const id = useId();

  const handleInputChange = (value: string, index: number) => {
    setSelectedIndex(index);
    setValue(value);
  };

  // TODO: label과 bg 코드에서 중복되는 부분 줄일 수 있지 않을까 ?
  return (
    <Wrapper size={size} count={options?.length}>
      {options?.map((option, index) => (
        <Input
          name={name}
          key={name + option.value}
          type="radio"
          id={name + option.value}
          checked={index === selectedIndex}
          disabled={option.disabled}
          onChange={() => handleInputChange(option.value, index)}
        />
      ))}
      {options?.map((option, index) => (
        <MotionWrapper key={name + option.value} size={size}>
          <MotionLabel
            htmlFor={name + option.value}
            data-value={option.value}
            size={size}
            isSelected={index === selectedIndex}
            disabled={option.disabled}
            whileTap={{
              scale: 0.9,
              transition: spring.rapid,
            }}
            onTapStart={() => {
              setTappingIndex(index);
            }}
            onTap={() => {
              setTappingIndex(-1);
            }}
            tap={tappingIndex === index}
          >
            {option.value}
          </MotionLabel>
          {index === selectedIndex && (
            <SelectedBg
              size={size}
              layoutId={id}
              transition={{
                layout: {
                  stiffness: 1000,
                  damping: 52,
                },
              }}
            ></SelectedBg>
          )}
        </MotionWrapper>
      ))}
    </Wrapper>
  );
};

export default SegmentedControls;
