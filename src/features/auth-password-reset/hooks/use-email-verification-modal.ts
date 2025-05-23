import { useState } from 'react';

import { useAuthForm } from '~/entities/auth';
import { ApiError, ERRORS, isApiError } from '~/shared/api';
import { AppErrorMessage, useApiStatusSync } from '~/shared/model';

import { STEPS } from '../consts/steps';
import { mapEmailVerificationDataToDto } from '../mappers/map-email-verification-data-to-dto copy 2';
import { useForgotPasswordMutation } from '../model/api';
import { schemas } from '../model/schemas';
import { EmailVerificationData } from '../model/types';
import { usePasswordResetContext } from './use-password-reset-context';

const mapErrorToMessage = (error: ApiError) => {
    switch (error.status) {
        case ERRORS.BAD_REQUEST:
            return {
                title: 'Для генерации нового одноразового пароля необходимо выждать минуту.',
            };
        case ERRORS.FORBIDDEN:
            return {
                description: 'Попробуйте другой e-mail или проверьте правильность его написания',
                title: 'Такого e-mail нет',
            };
        case ERRORS.INTERNAL_SERVER_ERRROR:
            return {
                description: 'Попробуйте немного позже',
                title: 'Ошибка сервера',
            };
        default:
            return undefined;
    }
};

export const useEmailVerificationModal = () => {
    const { errors, handleSubmit, register, reset, trimField } = useAuthForm(
        schemas.emailVerificationSchema,
    );

    const { setEmail, setStep } = usePasswordResetContext();

    const [errorMessage, setErrorMessage] = useState<AppErrorMessage>();

    const [forgotPassword, { isError, isLoading }] = useForgotPasswordMutation();

    const onSubmitCallback = async (data: EmailVerificationData) => {
        const dto = mapEmailVerificationDataToDto(data);

        reset();
        try {
            await forgotPassword(dto).unwrap();

            setEmail(data.email);
            setStep(STEPS.CODE_VERIFICATION);
        } catch (error) {
            if (isApiError(error)) {
                const message = mapErrorToMessage(error);
                setErrorMessage(message);
            }
        }
    };

    useApiStatusSync(isLoading, isError, errorMessage);

    const onSubmit = handleSubmit(onSubmitCallback);

    return {
        errors,
        onSubmit,
        register,
        trimField,
    };
};
