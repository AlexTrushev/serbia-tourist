import styled, { css } from 'styled-components';
import { palette } from '@theme/palette';

export const SButton = styled.button(
  () => css`
    background-color: ${palette.accent};
    border: 0 solid transparent;
    border-radius: 12px;
    display: flex;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    min-height: 48px;
    min-width: 48px;
    cursor: pointer;
    transition: filter 0.2s, transform 0.2s ease-in-out;

    &:active {
      transform: scale(0.95);
      transition: transform 0.1s ease-in-out;
    }

    &:hover {
      filter: brightness(80%);
    }

    svg {
      width: 24px;
      height: 24px;
      margin-right: 8px;
      fill: ${palette.primary};
    }
  `
);
