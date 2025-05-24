import { FormControl, FormControlProps } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import { authControlStyles as styles } from './index.styles';

type AuthControlProps = FormControlProps & {
    children: ReactNode;
};

export const AuthControl: FC<AuthControlProps> = ({ children, ...props }) => (
    <FormControl {...styles.control} {...props}>
        {children}
    </FormControl>
);
