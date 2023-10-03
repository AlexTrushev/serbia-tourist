import styled, { css } from 'styled-components';
import { palette } from '@theme/palette';
import { fonts } from '@theme/fonts';
import { isMobile } from 'react-device-detect';

export const SDatePickerInput = styled.input(
  () => css`
    outline: none;
    border: none;
    background-color: ${palette.backgroundPrimary};
    box-shadow: 0 0 0 2px ${palette.primary} inset;
    border-radius: 10px;
    padding: 12px;
    margin-bottom: 12px;
    transition: box-shadow 0.2s ease-in-out;
    font: ${fonts.small.button};
    color: ${palette.primary};

    ${isMobile &&
    css`
      -webkit-appearance: none;
      -webkit-border-radius: 10px;
      -webkit-padding-start: 12px;
      -webkit-padding-end: 12px;
      padding: 16px 24px;
    `}

    &:focus {
      background-color: ${palette.backgroundSecondary};
      box-shadow: 0 0 0 2px ${palette.accent} inset;
    }

    &:hover {
      box-shadow: 0 0 0 2px ${palette.accent} inset;
    }
  `
);
