import React, { Dispatch, SetStateAction, useId, useState } from "react";
import { spring } from "../styles";
import {
  Wrapper,
  Input,
  MotionLabel,
  MotionWrapper,
  SelectedBg,
} from "./styled";

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
