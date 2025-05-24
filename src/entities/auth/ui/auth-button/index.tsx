import { Button, ButtonProps } from '@chakra-ui/react';
import { FC } from 'react';

import { authButtonStyles as styles } from './index.styles';

export const AuthButton: FC<ButtonProps> = ({ children, ...props }) => (
    <Button {...styles.button} {...props}>
        {children}
    </Button>
);
