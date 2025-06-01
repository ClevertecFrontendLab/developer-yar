import { useEffect, useRef, useState } from 'react';
import { FieldError } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { ApiError, ERRORS, isApiError } from '~/shared/api';
import { useZodForm } from '~/shared/lib';
import { AppErrorMessage, useApiStatusSync } from '~/shared/model';
import { ROUTES } from '~/shared/routes';

import { mapSignInDataToDto } from '../mappers/map-sign-in-data-to-dto';
import { useSignInMutation } from '../model/api';
import { signInSchema } from '../model/schemas';
import { SignInData } from '../model/types';

const mapErrorToMessage = (error: ApiError) => {
    switch (error.status) {
        case ERRORS.UNAUTHORIZED:
            return { description: 'Попробуйте снова', title: 'Неверный логин или пароль' };
        case ERRORS.FORBIDDEN:
            return {
                description: 'Проверьте почту и перейдите по ссылке',
                title: 'E-mail не верифицирован',
            };
        default:
            return undefined;
    }
};

export const useSignInForm = () => {
    const { clearErrors, errors, handleSubmit, register, trimField, watch } =
        useZodForm(signInSchema);

    const [signIn, { isError, isLoading }] = useSignInMutation();

    const [errorMessage, setErrorMessage] = useState<AppErrorMessage>();

    const [showNetworkError, setShowNetworkError] = useState(false);

    const isAuthError = useRef(false);

    const navigate = useNavigate();

    const onSubmitCallback = async (data: SignInData) => {
        const dto = mapSignInDataToDto(data);

        try {
            await signIn(dto).unwrap();

            navigate(ROUTES.HOME, { replace: true });
        } catch (error) {
            if (isApiError(error)) {
                const message = mapErrorToMessage(error);
                setErrorMessage(message);
                if (error.status === ERRORS.UNAUTHORIZED) isAuthError.current = true;
                else if (error.status === ERRORS.INTERNAL_SERVER_ERRROR) setShowNetworkError(true);
            }
        }
    };

    useApiStatusSync(isLoading, {
        alignment: showNetworkError ? 'center' : 'left',
        isError: isError,
        message: errorMessage,
        type: 'auth',
    });

    const onSubmit = handleSubmit(onSubmitCallback);

    const handleRetry = () => {
        setShowNetworkError(false);
        onSubmit();
    };

    const closeNetworkError = () => setShowNetworkError(false);

    const isInvalid = (field?: FieldError) => Boolean(field) || isAuthError.current;

    const [loginValue, passwordValue] = watch(['login', 'password']);

    useEffect(() => {
        if (isAuthError.current && (loginValue || passwordValue)) {
            clearErrors();
            isAuthError.current = false;
        }
    }, [loginValue, passwordValue, clearErrors]);

    return {
        closeNetworkError,
        errors,
        handleRetry,
        isInvalid,
        onSubmit,
        register,
        showNetworkError,
        trimField,
    };
};
