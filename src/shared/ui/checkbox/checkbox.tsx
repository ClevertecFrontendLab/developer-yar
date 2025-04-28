import { Checkbox as ChakraCheckbox, CheckboxProps as ChakraCheckboxProps } from '@chakra-ui/react';
import { FC } from 'react';

import { checkboxStyles as styles } from './checkbox.styles';

type CheckboxProps = ChakraCheckboxProps;

export const Checkbox: FC<CheckboxProps> = ({ children, ...props }) => (
    <ChakraCheckbox {...styles.checkbox} {...props}>
        {children}
    </ChakraCheckbox>
);
