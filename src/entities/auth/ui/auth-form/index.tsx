import { Flex, FlexProps } from '@chakra-ui/react';
import { FC } from 'react';

import { AuthFormStyles as styles } from './index.styles';

type AuthFormProps = {
    onSubmit?: React.FormEventHandler<HTMLDivElement>;
} & FlexProps;

export const AuthForm: FC<AuthFormProps> = ({ children, onSubmit, ...props }) => (
    <Flex as='form' onSubmit={onSubmit} {...props} {...styles.form}>
        {children}
    </Flex>
);
