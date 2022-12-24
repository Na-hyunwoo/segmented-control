"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectedBg =
  exports.MotionLabel =
  exports.MotionWrapper =
  exports.Input =
  exports.Wrapper =
    void 0;
const styled_components_1 = __importStar(require("styled-components"));
const styles_1 = require("../styles");
const framer_motion_1 = require("framer-motion");
exports.Wrapper = styled_components_1.default.div`
  width: 100%;
  background-color: ${styles_1.colors.grey100};
  ${({ size }) =>
    size === "large" &&
    (0, styled_components_1.css)`
      padding: 4px;
      border-radius: 14px;
    `}
  ${({ size }) =>
    size === "small" &&
    (0, styled_components_1.css)`
      padding: 3px;
      border-radius: 10px;
    `}
	display: grid;
  grid-template-columns: ${({ count }) => `repeat(${count}, 1fr)`};
`;
exports.Input = styled_components_1.default.input`
  display: none;
`;
exports.MotionWrapper = styled_components_1.default.div`
  position: relative;
  display: flex;

  ${({ size }) =>
    size === "large"
      ? (0, styled_components_1.css)`
          ${styles_1.typography.t5};
          border-radius: 10px;
        `
      : size === "small"
      ? (0, styled_components_1.css)`
          ${styles_1.typography.t6};
          border-radius: 8px;
        `
      : ""}
`;
exports.MotionLabel = (0, styled_components_1.default)(
  framer_motion_1.motion.label
)`
  flex: 1;
  text-align: center;
  z-index: 1;

  ${({ size }) =>
    size === "large"
      ? (0, styled_components_1.css)`
          padding: 8px 0px;
          border-radius: 10px;
        `
      : size === "small"
      ? (0, styled_components_1.css)`
          padding: 5px 0px;
          border-radius: 8px;
        `
      : ""}

  ${({ isSelected, tap }) =>
    isSelected
      ? (0, styled_components_1.css)`
          font-weight: 700;
          color: ${styles_1.colors.grey800};
        `
      : tap
      ? (0, styled_components_1.css)`
          font-weight: 600;
          color: ${styles_1.colors.grey800};
          background-color: ${styles_1.colors.greyOpacity100};
        `
      : (0, styled_components_1.css)`
          font-weight: 500;
          color: ${styles_1.colors.grey600};
        `}

  ${({ disabled }) =>
    disabled
      ? (0, styled_components_1.css)`
          cursor: not-allowed;
        `
      : (0, styled_components_1.css)`
          cursor: pointer;
        `}
`;
exports.SelectedBg = (0, styled_components_1.default)(
  framer_motion_1.motion.div
)`
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: ${styles_1.colors.white};
  box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.09);

  ${({ size }) =>
    size === "large"
      ? (0, styled_components_1.css)`
          border-radius: 10px;
        `
      : size === "small"
      ? (0, styled_components_1.css)`
          border-radius: 8px;
        `
      : ""}
`;
