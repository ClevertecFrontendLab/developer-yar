import { FormErrorMessage, FormErrorMessageProps } from '@chakra-ui/react';
import { FC } from 'react';

import { authErrorMessageStyles as styles } from './index.styles';

type AuthErrorMessageProps = FormErrorMessageProps & {
    message?: string;
};

export const AuthErrorMessage: FC<AuthErrorMessageProps> = ({ message, ...props }) => {
    if (message)
        return (
            <FormErrorMessage {...styles.errorMessage} {...props}>
                {message}
            </FormErrorMessage>
        );
    return null;
};
