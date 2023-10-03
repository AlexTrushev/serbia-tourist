import { IDefaultComponentProp } from '@global/types';

export interface IDatePickerProps extends IDefaultComponentProp {
  selectedDate: Date | null;
  onChange: (date: Date) => void;
}
