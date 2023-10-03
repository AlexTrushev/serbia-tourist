import { IDefaultComponentProp } from '@global/types';

export interface IDatePickerInputProps extends IDefaultComponentProp {
  onChange: (date: Date | null) => void;
}
