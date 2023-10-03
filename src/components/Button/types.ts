import { ReactNode } from 'react';
import { IDefaultComponentProp } from '@global/types';

export interface IButtonProps extends IDefaultComponentProp {
  children?: ReactNode;
  leftIcon?: ReactNode;
}
