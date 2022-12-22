import styled, { css } from "styled-components";
import { colors, typography } from "../styles";
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


export const MotionLabel = styled(motion.label)<{
  size: "large" | "small",
  isActive: boolean,
  disabled?: boolean; 
  tap: boolean,
}>`
  text-align: center;
  background-color: ${colors.grey100};

  ${({ size }) =>
    size === "large"
      ? css`
          padding: 8px 0px;
          ${typography.t5};
          border-radius: 10px;
        `
      : size === "small"
      ? css`
          padding: 5px 0px;
          ${typography.t6};
          border-radius: 8px;
        `
      : ""}

  ${({ isActive, tap }) =>
    isActive
      ? css`
          font-weight: 700;
          color: ${colors.grey800};
          background-color: ${colors.white};
          box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.09);
        `
      : tap 
      ? css`
          background-color: ${colors.greyOpacity100};
          font-weight: 500;
          color: ${colors.grey600};
        `
      : css`
          background-color: ${colors.grey100};
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
