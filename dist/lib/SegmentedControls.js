"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styles_1 = require("../styles");
const SegmentedControls_styles_1 = require("./SegmentedControls.styles");
const SegmentedControls = ({ options, setValue, size, name, defaultIndex }) => {
  const [selectedIndex, setSelectedIndex] = (0, react_1.useState)(defaultIndex);
  const [tappingIndex, setTappingIndex] = (0, react_1.useState)(-1);
  const id = (0, react_1.useId)();
  const handleInputChange = (value, index) => {
    setSelectedIndex(index);
    setValue(value);
  };
  // TODO: label과 bg 코드에서 중복되는 부분 줄일 수 있지 않을까 ?
  return (0, jsx_runtime_1.jsxs)(
    SegmentedControls_styles_1.Wrapper,
    Object.assign(
      {
        size: size,
        count: options === null || options === void 0 ? void 0 : options.length,
      },
      {
        children: [
          options === null || options === void 0
            ? void 0
            : options.map((option, index) =>
                (0, jsx_runtime_1.jsx)(
                  SegmentedControls_styles_1.Input,
                  {
                    name: name,
                    type: "radio",
                    id: name + option.value,
                    checked: index === selectedIndex,
                    disabled: option.disabled,
                    onChange: () => handleInputChange(option.value, index),
                  },
                  name + option.value
                )
              ),
          options === null || options === void 0
            ? void 0
            : options.map((option, index) =>
                (0, jsx_runtime_1.jsxs)(
                  SegmentedControls_styles_1.MotionWrapper,
                  Object.assign(
                    { size: size },
                    {
                      children: [
                        (0, jsx_runtime_1.jsx)(
                          SegmentedControls_styles_1.MotionLabel,
                          Object.assign(
                            {
                              htmlFor: name + option.value,
                              "data-value": option.value,
                              size: size,
                              isSelected: index === selectedIndex,
                              disabled: option.disabled,
                              whileTap: {
                                scale: 0.9,
                                transition: styles_1.spring.rapid,
                              },
                              onTapStart: () => {
                                setTappingIndex(index);
                              },
                              onTap: () => {
                                setTappingIndex(-1);
                              },
                              tap: tappingIndex === index,
                            },
                            { children: option.value }
                          )
                        ),
                        index === selectedIndex &&
                          (0, jsx_runtime_1.jsx)(
                            SegmentedControls_styles_1.SelectedBg,
                            {
                              size: size,
                              layoutId: id,
                              transition: {
                                layout: {
                                  stiffness: 1000,
                                  damping: 52,
                                },
                              },
                            }
                          ),
                      ],
                    }
                  ),
                  name + option.value
                )
              ),
        ],
      }
    )
  );
};
exports.default = SegmentedControls;
