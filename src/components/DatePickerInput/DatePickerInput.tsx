import { FC } from 'react';
import { SDatePickerInput } from './styled.index';
import { IDatePickerInputProps } from './types';

import { useDatePickerInput } from './hooks/useDatePickerInput';

export const DatePickerInput: FC<IDatePickerInputProps> = ({
  className,
  onChange,
}) => {
  const { inputValue, handleChange } = useDatePickerInput({ onChange });

  return (
    <SDatePickerInput
      type="date"
      name="datePickerInput"
      value={inputValue}
      onChange={handleChange}
      className={className}
    />
  );
};
