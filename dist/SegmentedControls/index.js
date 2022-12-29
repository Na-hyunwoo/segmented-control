"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styles_1 = require("../styles");
const styled_1 = require("./styled");
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
const SegmentedControls = ({ options, setValue, size, name, defaultIndex, }) => {
    const [selectedIndex, setSelectedIndex] = (0, react_1.useState)(defaultIndex);
    const [tappingIndex, setTappingIndex] = (0, react_1.useState)(-1);
    const id = (0, react_1.useId)();
    const handleInputChange = (value, index) => {
        setSelectedIndex(index);
        setValue(value);
    };
    // TODO: label과 bg 코드에서 중복되는 부분 줄일 수 있지 않을까 ?
    return ((0, jsx_runtime_1.jsxs)(styled_1.Wrapper, Object.assign({ size: size, count: options === null || options === void 0 ? void 0 : options.length }, { children: [options === null || options === void 0 ? void 0 : options.map((option, index) => ((0, jsx_runtime_1.jsx)(styled_1.Input, { name: name, type: "radio", id: name + option.value, checked: index === selectedIndex, disabled: option.disabled, onChange: () => handleInputChange(option.value, index) }, name + option.value))), options === null || options === void 0 ? void 0 : options.map((option, index) => ((0, jsx_runtime_1.jsxs)(styled_1.MotionWrapper, Object.assign({ size: size }, { children: [(0, jsx_runtime_1.jsx)(styled_1.MotionLabel, Object.assign({ htmlFor: name + option.value, "data-value": option.value, size: size, isSelected: index === selectedIndex, disabled: option.disabled, whileTap: {
                            scale: 0.9,
                            transition: styles_1.spring.rapid,
                        }, onTapStart: () => {
                            setTappingIndex(index);
                        }, onTap: () => {
                            setTappingIndex(-1);
                        }, tap: tappingIndex === index }, { children: option.value })), index === selectedIndex && ((0, jsx_runtime_1.jsx)(styled_1.SelectedBg, { size: size, layoutId: id, transition: {
                            layout: {
                                stiffness: 1000,
                                damping: 52,
                            },
                        } }))] }), name + option.value)))] })));
};
exports.default = SegmentedControls;
