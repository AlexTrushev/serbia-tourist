import styled, { css } from 'styled-components';
import { palette } from '@theme/palette';
import { Text } from '../Text/Text';

export const SContent = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${palette.backgroundSecondary};
    padding: 32px;
    margin: 0 auto;
    border-radius: 16px;
    max-width: 600px;
  `
);

export const SContentHeading = styled(Text)(
  () => css`
    margin-bottom: 24px;
    text-align: center;
  `
);

export const SContentTextWrapper = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 16px;

    @media (min-width: 700px) {
      flex-direction: row;
    }

    :first-child {
      margin-right: 8px;
    }
  `
);

export const SContentText = styled(Text)(
  () => css`
    text-align: center;
  `
);
