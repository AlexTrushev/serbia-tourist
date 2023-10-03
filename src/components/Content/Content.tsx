import { SContent, SContentText, SContentTextWrapper } from './styled.index';
import { SContentHeading } from './styled.index';
import { ETextLevel } from '@theme/types';
import { useContent } from './hooks/useContent';
import { DatePickerInput } from '../DatePickerInput/DatePickerInput';

export const Content = () => {
  const { daysRemaining, visarunDate, handleDateChange } = useContent();

  return (
    <SContent>
      <SContentHeading color="primary" level={ETextLevel.h1}>
        Выберите дату въезда в Сербию
      </SContentHeading>
      <DatePickerInput onChange={handleDateChange} />
      {visarunDate && (
        <SContentTextWrapper>
          <SContentText color="primary" level={ETextLevel.p}>
            Последний день для визарана:
          </SContentText>
          <SContentText color="primary" level={ETextLevel.h2}>
            {visarunDate}
          </SContentText>
        </SContentTextWrapper>
      )}
      {daysRemaining !== null && daysRemaining > 0 && (
        <SContentTextWrapper>
          <SContentText color="primary" level={ETextLevel.p}>
            Осталось дней до визарана:
          </SContentText>
          <SContentText
            color={daysRemaining > 7 ? 'success' : 'warning'}
            level={ETextLevel.h2}
          >
            {daysRemaining}
          </SContentText>
        </SContentTextWrapper>
      )}
      {daysRemaining !== null && daysRemaining === 0 && (
        <SContentText color="warning" level={ETextLevel.h2}>
          Вы должны сегодня сделать визаран!
        </SContentText>
      )}
      {daysRemaining !== null && daysRemaining < 0 && (
        <SContentText color="alert" level={ETextLevel.h2}>
          Вы просрочили 30 дней! Срочно сделайте визаран!
        </SContentText>
      )}
    </SContent>
  );
};
