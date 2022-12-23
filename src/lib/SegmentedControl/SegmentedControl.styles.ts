import styled, { css } from "styled-components";
import { colors, typography } from "../../styles";
import { motion } from "framer-motion";

export const Wrapper = styled.div<{ size: string; count: number }>`
  width: 100%;
  background-color: ${colors.grey100};
  ${({ size }) =>
    size === "large" &&
    css`
      padding: 4px;
      border-radius: 14px;
    `}
  ${({ size }) =>
    size === "small" &&
    css`
      padding: 3px;
      border-radius: 10px;
    `}
	display: grid;
  grid-template-columns: ${({ count }) => `repeat(${count}, 1fr)`};
`;

export const Input = styled.input`
  display: none;
`;

export const MotionWrapper = styled.div<{ size: "large" | "small" }>`
  position: relative;
  display: flex;

  ${({ size }) =>
    size === "large"
      ? css`
          ${typography.t5};
          border-radius: 10px;
        `
      : size === "small"
      ? css`
          ${typography.t6};
          border-radius: 8px;
        `
      : ""}
`;

export const MotionLabel = styled(motion.label)<{
  size: "large" | "small";
  isSelected: boolean;
  disabled?: boolean;
  tap: boolean;
}>`
  flex: 1;
  text-align: center;
  z-index: 1;

  ${({ size }) =>
    size === "large"
      ? css`
          padding: 8px 0px;
          border-radius: 10px;
        `
      : size === "small"
      ? css`
          padding: 5px 0px;
          border-radius: 8px;
        `
      : ""}

  ${({ isSelected, tap }) =>
    isSelected
      ? css`
          font-weight: 700;
          color: ${colors.grey800};
        `
      : tap
      ? css`
          font-weight: 600;
          color: ${colors.grey800};
          background-color: ${colors.greyOpacity100};
        `
      : css`
          font-weight: 500;
          color: ${colors.grey600};
        `}

  ${({ disabled }) =>
    disabled
      ? css`
          cursor: not-allowed;
        `
      : css`
          cursor: pointer;
        `}
`;

export const SelectedBg = styled(motion.div)<{ size: "large" | "small" }>`
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: ${colors.white};
  box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.09);

  ${({ size }) =>
    size === "large"
      ? css`
          border-radius: 10px;
        `
      : size === "small"
      ? css`
          border-radius: 8px;
        `
      : ""}
`;
