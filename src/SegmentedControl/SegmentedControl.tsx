import { Dispatch, SetStateAction, useState } from "react";
import { Wrapper, Input, Label, AnimatedDiv } from "./SegmentedControl.styles";
import { animated, useSprings } from "@react-spring/web";
import { colors, spring } from "../styles";

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
  const [springs, api] = useSprings(options.length, (_) => ({
    from: { scale: 1 },
  }));

  const handleInputChange = (value: string, index: number) => {
    setActiveIndex(index);
    setValue(value);
  };

  // TODO: disable된 animatedDiv의 font-weight가 동작하지 않도록 변경하기. 
  const handleTouchStart = (touchedIndex: number, activeIndex: number) => {
    api.start(
      (index) =>
        touchedIndex === index &&
        touchedIndex !== activeIndex && {
          config: spring.rapid,
          from: {
            scale: 1,
            fontWeight: 500,
          },
          to: {
            scale: 0.9,
            fontWeight: 600,
            color: colors.grey800,
          },
        }
    );
    api.start(
      (index) =>
        touchedIndex !== index &&
        touchedIndex !== activeIndex && {
          from: {
            scale: 1,
          },
          to: {
            scale: 1,
            fontWeight: 500,
            color: colors.grey600
          },
        }
    );
  };

  const handleTouchEnd = (touchedIndex: number, activeIndex: number) => {
    api.start(
      (index) =>
        touchedIndex === index &&
        activeIndex !== touchedIndex && {
          config: spring.quick,
          from: {
            scale: 0.9,
            fontWeight: 600,
          },
          to: {
            scale: 1,
            fontWeight: 700,
          },
        }
    );
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
        <Label
          key={name + option.value}
          htmlFor={name + option.value}
          data-value={option.value}
          size={size}
          isActive={index === activeIndex}
        >
          <AnimatedDiv
            size={size}
            disabled={option.disabled}
            style={{ ...springs[index] }}
            onTouchStart={() => handleTouchStart(index, activeIndex)}
            onTouchEnd={() => handleTouchEnd(index, activeIndex)}
          >
            {option.value}
          </AnimatedDiv>
        </Label>
      ))}
    </Wrapper>
  );
};

export default SegmentedControl;

