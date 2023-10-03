import styled, { css } from 'styled-components';
import { palette } from '@theme/palette';

export const SButtonText = styled.button(
  () => css`
    background-color: transparent;
    border: 0 solid transparent;
    display: flex;
    padding: 12px 0px;
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
