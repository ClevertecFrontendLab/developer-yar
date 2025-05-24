import { FormLabel, FormLabelProps } from '@chakra-ui/react';
import { FC } from 'react';

import { authLabelStyles as styles } from './index.styles';

export const AuthLabel: FC<FormLabelProps> = ({ children, ...props }) => (
    <FormLabel {...styles.label} {...props}>
        {children}
    </FormLabel>
);
