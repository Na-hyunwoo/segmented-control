import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { colors, spring } from "../styles";
import { Wrapper, Input, MotionLabel } from "./SegmentedControl.styles";

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

const SegmentedControl = ({
  options,
  setValue,
  size,
  name,
  defaultIndex,
}: Props): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(defaultIndex);
  const [tappingIndex, setTappingIndex] = useState<number>(-1);

  const handleInputChange = (value: string, index: number) => {
    setActiveIndex(index);
    setValue(value);
  };

  return (
    <Wrapper size={size} count={options.length}>
      {options.map((option, index) => (
        <Input
          name={name}
          key={name + option.value}
          type="radio"
          id={name + option.value}
          checked={index === activeIndex}
          disabled={option.disabled}
          onChange={() => handleInputChange(option.value, index)}
        />
      ))}
      {options.map((option, index) => (
        <MotionLabel
          key={name + option.value}
          htmlFor={name + option.value}
          data-value={option.value}
          size={size}
          isActive={index === activeIndex}
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
      ))}
    </Wrapper>
  );
};

export default SegmentedControl;
