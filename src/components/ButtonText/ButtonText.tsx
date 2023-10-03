import { FC } from 'react';

import { SButtonText } from './styled.index';
import { Text } from '../Text/Text';
import { ETextLevel } from '../../theme/types';
import { IButtonTextProps } from './types';

export const ButtonText: FC<IButtonTextProps> = ({
  children,
  leftIcon,
  className,
}) => {
  return (
    <SButtonText className={className}>
      {leftIcon}
      {children && (
        <Text color="primary" level={ETextLevel.buttons}>
          {children}
        </Text>
      )}
    </SButtonText>
  );
};
