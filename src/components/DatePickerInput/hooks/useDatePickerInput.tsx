import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { IDatePickerInputProps } from '../types';

export const useDatePickerInput = ({ onChange }: IDatePickerInputProps) => {
  const currentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = e.target.value;

    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (datePattern.test(newInputValue)) {
      setInputValue(newInputValue);
      if (onChange) {
        const date = new Date(newInputValue);
        onChange(date);
      }
    } else if (newInputValue.length === 0) {
      setInputValue(newInputValue);
    }
  };

  useEffect(() => {
    if (isMobile) {
      setInputValue(currentDate());

      if (onChange) {
        const date = new Date(currentDate());
        onChange(date);
      }
    }
  }, []);

  return {
    inputValue,
    handleChange,
  };
};
