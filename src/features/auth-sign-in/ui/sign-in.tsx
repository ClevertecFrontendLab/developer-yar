import { Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

import {
    AuthButton,
    AuthControl,
    AuthControls,
    AuthFeedback,
    AuthForm,
    AuthInput,
    AuthLabel,
} from '~/entities/auth';
import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { useApiStatusSync } from '~/shared/model';

import { useSignInForm } from '../hooks/use-sign-in-form';
import { useSuccessVerification } from '../hooks/use-success-verification';
import { AuthSignInErrorModal } from './auth-sign-in-error-modal';
import { signInStyles as styles } from './sign-in.styles';

type SignInProps = {
    isResetSuccessful: boolean;
    onForgotPasswordClick: () => void;
};

export const SignIn: FC<SignInProps> = ({ isResetSuccessful, onForgotPasswordClick }) => {
    const {
        closeNetworkError,
        errors,
        handleRetry,
        isInvalid,
        onSubmit,
        register,
        showNetworkError,
        trimField,
    } = useSignInForm();

    useSuccessVerification();

    useApiStatusSync(false, undefined, {
        alignment: 'left',
        isSuccess: Boolean(isResetSuccessful),
        message: 'Восстановление данных успешно',
    });

    return (
        <>
            <AuthForm
                {...styles.form}
                data-test-id={DATA_TEST_ATTRIBUTES.SIGN_IN_FORM}
                onSubmit={onSubmit}
            >
                <AuthControls>
                    <AuthControl isInvalid={isInvalid(errors.login)}>
                        <AuthLabel>Логин</AuthLabel>
                        <AuthInput
                            autoComplete='username'
                            placeholder='Введите логин'
                            {...register('login')}
                            data-test-id={DATA_TEST_ATTRIBUTES.SIGN_IN_LOGIN_INPUT}
                            onBlur={trimField('login')}
                        />
                        <AuthFeedback error={errors.login?.message} />
                    </AuthControl>

                    <AuthControl isInvalid={isInvalid(errors.password)}>
                        <AuthLabel>Пароль</AuthLabel>
                        <AuthInput
                            autoComplete='current-password'
                            placeholder='Введите пароль'
                            type='password'
                            {...register('password')}
                            data-test-id={DATA_TEST_ATTRIBUTES.SIGN_IN_PASSWORD_INPUT}
                        />
                        <AuthFeedback error={errors.password?.message} />
                    </AuthControl>
                </AuthControls>

                <Stack {...styles.formActions}>
                    <AuthButton
                        data-test-id={DATA_TEST_ATTRIBUTES.SIGN_IN_SUBMIT_BUTTON}
                        type='submit'
                    >
                        Войти
                    </AuthButton>
                    <Text
                        {...styles.forgotAuthData}
                        data-test-id={DATA_TEST_ATTRIBUTES.SIGN_IN_FORGOT_PASSWORD}
                        onClick={onForgotPasswordClick}
                    >
                        Забыли логин или пароль?
                    </Text>
                </Stack>
            </AuthForm>
            <AuthSignInErrorModal
                isOpen={showNetworkError}
                retrySignIn={handleRetry}
                onClose={closeNetworkError}
            />
        </>
    );
};
