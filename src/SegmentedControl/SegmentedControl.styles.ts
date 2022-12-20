import styled, { css } from "styled-components";
import { colors, typography } from "../styles";

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
  disabled?: boolean;
}>`
  text-align: center;

  ${({ size }) =>
    size === "large"
      ? css`
          ${typography.t5};
          padding: 8px 0px;
          border-radius: 10px;
        `
      : size === "small"
      ? css`
          ${typography.t6};
          padding: 5px 0px;
          border-radius: 8px;
        `
      : ""}

  ${({ isActive }) =>
    isActive
      ? css`
          color: ${colors.grey800};
          font-weight: bold;
          background: #fff;
          box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.09);
        `
      : css`
          color: ${colors.grey600};
          font-weight: medium;
        `}

	cursor: ${({ disabled }) => (disabled ? `not-allowed` : `pointer`)};
`;
