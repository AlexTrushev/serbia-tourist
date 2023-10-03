import { ReactNode } from 'react';
import { ETextLevel, TPaletteColors } from '@theme/types';
import { IDefaultComponentProp } from '@global/types';

export interface ITextProps extends IDefaultComponentProp {
  children: ReactNode;
  color: TPaletteColors;
  level: ETextLevel;
}

export interface ISTextProps {
  $color: TPaletteColors;
}
