import { FC } from 'react';

import { SHeading1, SHeading2, SParagraph, SButtonsText } from './styled.index';
import { ITextProps } from './types';

export const Text: FC<ITextProps> = ({ children, color, level, className }) => {
  switch (level) {
    case 'h1':
      return (
        <SHeading1 $color={color} className={className}>
          {children}
        </SHeading1>
      );

    case 'h2':
      return (
        <SHeading2 $color={color} className={className}>
          {children}
        </SHeading2>
      );

    case 'p':
      return (
        <SParagraph $color={color} className={className}>
          {children}
        </SParagraph>
      );

    case 'buttons':
      return (
        <SButtonsText $color={color} className={className}>
          {children}
        </SButtonsText>
      );
  }
};
