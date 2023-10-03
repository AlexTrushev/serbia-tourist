import { FC } from 'react';
import { registerLocale } from 'react-datepicker';
import { SDatePicker } from './styled.index';
import { IDatePickerProps } from './types';

import ru from 'date-fns/locale/ru';

registerLocale('ru', ru);

export const DatePicker: FC<IDatePickerProps> = ({
  className,
  selectedDate,
  onChange,
}) => {
  return (
    <SDatePicker
      locale="ru"
      selected={selectedDate}
      onChange={onChange}
      dateFormat="dd.MM.yyyy"
      placeholderText="ДД.ММ.ГГГГ"
      className={className}
    />
  );
};
