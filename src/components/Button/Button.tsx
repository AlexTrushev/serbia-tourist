import { forwardRef } from 'react';

import { SButton } from './styled.index';
import { Text } from '../Text/Text';
import { ETextLevel } from '@theme/types';
import { IButtonProps } from './types';

// export const Button: FC<IButtonProps> = ({ children, leftIcon, className }) => {
//   return (
//     <SButton className={className}>
//       {leftIcon}
//       {children && (
//         <Text color="secondary" level={ETextLevel.buttons}>
//           {children}
//         </Text>
//       )}
//     </SButton>
//   );
// };

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ children, leftIcon, className }, ref) => (
    <SButton ref={ref} className={className}>
      {leftIcon}
      {children && (
        <Text color="secondary" level={ETextLevel.buttons}>
          {children}
        </Text>
      )}
    </SButton>
  )
);
