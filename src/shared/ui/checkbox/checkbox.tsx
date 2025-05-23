import { Checkbox as ChakraCheckbox, CheckboxProps } from '@chakra-ui/react';
import { FC } from 'react';

import { checkboxStyles as styles } from './checkbox.styles';

export const Checkbox: FC<CheckboxProps> = ({ children, ...props }) => (
    <ChakraCheckbox {...styles.checkbox} {...props}>
        {children}
    </ChakraCheckbox>
);
