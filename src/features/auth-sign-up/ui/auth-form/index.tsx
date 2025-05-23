import { FlexProps } from '@chakra-ui/react';
import { FC } from 'react';

import { AuthForm as BaseAuthForm } from '~/entities/auth';

import { authFormStyles as styles } from './index.styles';

type AuthFormProps = {
    onSubmit?: React.FormEventHandler<HTMLDivElement>;
} & FlexProps;

export const AuthForm: FC<AuthFormProps> = (props) => <BaseAuthForm {...styles.form} {...props} />;
