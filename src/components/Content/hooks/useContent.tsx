import { useEffect, useState } from 'react';

const daysOfWeek = [
  'понедельник',
  'вторник',
  'среда',
  'четверг',
  'пятница',
  'суббота',
  'воскресенье',
];

const months = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

export const useContent = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [daysRemaining, setDaysRemaining] = useState<number | null>(null);
  const [visarunDate, setVisarunDate] = useState('');
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const calculateDate = (selectedDate: Date) => {
    if (selectedDate) {
      const currentDate = new Date();
      const nextVisarunDate = new Date(selectedDate);
      nextVisarunDate.setDate(selectedDate.getDate() + 29);

      const dayOfWeek = daysOfWeek[nextVisarunDate.getDay()];
      const dayOfMonth = nextVisarunDate.getDate();
      const month = months[nextVisarunDate.getMonth()];
      const year = nextVisarunDate.getFullYear();

      const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;

      const timeDifference = nextVisarunDate.getTime() - currentDate.getTime();

      const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

      setVisarunDate(formattedDate);
      setDaysRemaining(daysRemaining);
    }
  };

  useEffect(() => {
    if (selectedDate !== null) {
      calculateDate(selectedDate);
    }
  }, [selectedDate]);

  return {
    daysRemaining,
    visarunDate,
    handleDateChange,
  };
};
