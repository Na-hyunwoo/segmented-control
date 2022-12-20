import { Dispatch, SetStateAction, useState } from "react";
import { Wrapper, Input, Label } from "./SegmentedControl.styles";

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
        <Label
          key={name + option.value}
          htmlFor={name + option.value}
          data-value={option.value}
          size={size}
          isActive={index === activeIndex}
          disabled={option.disabled}
        >
          {option.value}
        </Label>
      ))}
    </Wrapper>
  );
};

export default SegmentedControl;
