import { FormHelperText, FormHelperTextProps } from '@chakra-ui/react';
import { FC } from 'react';

import { AuthHelperTextStyles as styles } from './index.styles';

export const AuthHelperText: FC<FormHelperTextProps> = ({ children }) => (
    <FormHelperText {...styles.helperText}>{children}</FormHelperText>
);
