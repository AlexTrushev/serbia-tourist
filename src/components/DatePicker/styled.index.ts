import styled, { css } from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { palette } from '@theme/palette';
import { fonts } from '@theme/fonts';

export const SDatePicker = styled(DatePicker)(
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

    &:focus {
      background-color: ${palette.backgroundSecondary};
      box-shadow: 0 0 0 2px ${palette.accent} inset;
    }

    &:hover {
      box-shadow: 0 0 0 2px ${palette.accent} inset;
    }
  `
);

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

    &:focus {
      background-color: ${palette.backgroundSecondary};
      box-shadow: 0 0 0 2px ${palette.accent} inset;
    }

    &:hover {
      box-shadow: 0 0 0 2px ${palette.accent} inset;
    }
  `
);
