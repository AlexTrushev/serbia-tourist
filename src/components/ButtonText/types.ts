import { IDefaultComponentProp } from '@global/types';
import { ReactNode } from 'react';

export interface IButtonTextProps extends IDefaultComponentProp {
  children?: ReactNode;
  leftIcon?: ReactNode;
}
