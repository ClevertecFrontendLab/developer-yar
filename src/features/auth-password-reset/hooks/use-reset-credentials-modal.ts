import { useEffect, useState } from 'react';

import { useAuthForm } from '~/entities/auth';
import { ApiError, ERRORS, isApiError } from '~/shared/api';
import { AppErrorMessage, useApiStatusSync } from '~/shared/model';

import { mapResetCredentialsDataToDto } from '../mappers/map-reset-credentials-data-to-dto';
import { useResetPasswordMutation } from '../model/api';
import { schemas } from '../model/schemas';
import { ResetCredentialsData } from '../model/types';
import { usePasswordResetContext } from './use-password-reset-context';

const mapErrorToMessage = (error: ApiError) => {
    switch (error.status) {
        case ERRORS.FORBIDDEN:
            return {
                title: 'Единовременный пароль невалиден или просрочен. Запросите пароль заново',
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

export const useResetCredentialsModal = () => {
    const { errors, handleSubmit, register, trimField } = useAuthForm(
        schemas.resetCredentialsSchema,
    );

    const { email, handleModalClose, handleResetOpen } = usePasswordResetContext();

    const [errorMessage, setErrorMessage] = useState<AppErrorMessage>();

    const [resetPassword, { isError, isLoading, isSuccess }] = useResetPasswordMutation();

    useEffect(() => {
        if (isSuccess) {
            handleModalClose();
        }
    }, [isSuccess, handleModalClose]);

    const onSubmitCallback = async (data: ResetCredentialsData) => {
        const dto = mapResetCredentialsDataToDto(data, email);

        try {
            await resetPassword(dto).unwrap();

            handleResetOpen();
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
