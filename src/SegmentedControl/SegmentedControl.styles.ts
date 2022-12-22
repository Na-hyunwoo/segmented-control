import styled, { css } from "styled-components";
import { colors, typography } from "../styles";
import { animated } from "@react-spring/web";

export const Wrapper = styled.div<{ size: string; count: number }>`
  width: 100%;
  background: ${colors.grey100};
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

export const Label = styled.label<{
  size: string;
  isActive: boolean;
}>`
  text-align: center;

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

  ${({ isActive }) =>
    isActive
      ? css`
          font-weight: 700;
          color: ${colors.grey800};
          background: #fff;
          box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.09);
        `
      : css`
          font-weight: 500;
          color: ${colors.grey600};
        `}
`;

export const AnimatedDiv = styled(animated.div)<{
  size: "large" | "small", 
  disabled?: boolean; 
}>`
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

  ${({ disabled }) =>
    disabled
      ? css`
          cursor: not-allowed;
        `
      : css`
          cursor: pointer;
        `}
`;
