import styled, { css } from 'styled-components';

import { palette } from '@theme/palette';
import { fonts } from '@theme/fonts';
import { ISTextProps } from './types';

export const SParagraph = styled.p<ISTextProps>(
  ({ $color }) => css`
    font: ${fonts.small.p};
    color: ${palette[$color || 'textPrimary']};
    margin: 0;

    @media (min-width: 700px) {
      font: ${fonts.large.p};
    }
  `
);

export const SHeading1 = styled.h1<ISTextProps>(
  ({ $color }) => css`
    font: ${fonts.small.h1};
    color: ${palette[$color || 'textPrimary']};
    margin: 0;

    @media (min-width: 700px) {
      font: ${fonts.large.h1};
    }
  `
);

export const SHeading2 = styled.h2<ISTextProps>(
  ({ $color }) => css`
    font: ${fonts.small.h2};
    color: ${palette[$color || 'textPrimary']};
    margin: 0;

    @media (min-width: 700px) {
      font: ${fonts.large.h2};
    }
  `
);

export const SButtonsText = styled.p<ISTextProps>(
  ({ $color }) => css`
    font: ${fonts.small.button};
    color: ${palette[$color || 'textPrimary']};
    margin: 0;

    @media (min-width: 700px) {
      font: ${fonts.large.button};
    }
  `
);
