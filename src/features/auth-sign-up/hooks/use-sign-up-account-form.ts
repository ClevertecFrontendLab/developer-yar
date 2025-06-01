import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { ApiError, ERRORS, isApiError } from '~/shared/api';
import { useZodForm } from '~/shared/lib';
import { AppErrorMessage, useApiStatusSync } from '~/shared/model';
import { ROUTES } from '~/shared/routes';

import { ACCOUNT_FIELDS } from '../consts/fields';
import { accountDataFieldSet as fields } from '../consts/sign-up-fields';
import { STEPS } from '../consts/steps';
import { mapSignUpDataToDto } from '../mappers/map-sign-up-data-to-dto';
import { useSignUpMutation } from '../model/api';
import { signUpAccountSchema } from '../model/schemas';
import { SignUpAccountData } from '../model/types';
import { useSignUpContext } from './use-sign-up-context';

const mapErrorToMessage = (error: ApiError) => {
    switch (error.status) {
        case ERRORS.BAD_REQUEST:
            return { title: error.data.message };
        case ERRORS.INTERNAL_SERVER_ERRROR:
            return {
                description: 'Попробуйте немного позже',
                title: 'Ошибка сервера',
            };
        default:
            return undefined;
    }
};

export const useSignUpAccountForm = () => {
    const { dirtyFields, errors, handleSubmit, register, trimField } =
        useZodForm(signUpAccountSchema);

    const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);

    const [signUp, { isError, isLoading }] = useSignUpMutation();

    const [errorMessage, setErrorMessage] = useState<AppErrorMessage>();

    const { formDataPersonal, setProgress, step } = useSignUpContext();

    const navigate = useNavigate();

    const onSubmitCallback = async (data: SignUpAccountData) => {
        const signUpDataDto = mapSignUpDataToDto({ ...formDataPersonal, ...data });

        try {
            await signUp(signUpDataDto).unwrap();

            setIsVerificationModalOpen(true);
        } catch (error) {
            if (isApiError(error)) {
                const message = mapErrorToMessage(error);
                setErrorMessage(message);
            }
        }
    };

    const validCount = fields.filter(({ name }) => dirtyFields[name] && !errors[name]).length;
    const personalProgress = (validCount / ACCOUNT_FIELDS) * 50;

    useEffect(() => {
        setProgress((prev) => ({ ...prev, account: personalProgress }));
    }, [personalProgress, setProgress]);

    useApiStatusSync(isLoading, {
        alignment: 'left',
        isError: isError,
        message: errorMessage,
        type: 'auth',
    });

    const closeVerificationModal = () => {
        navigate(ROUTES.AUTH_SIGN_IN, { replace: true });
        setIsVerificationModalOpen(false);
    };

    return {
        closeVerificationModal,
        email: formDataPersonal.email,
        errors,
        isActiveForm: step === STEPS.ACCOUNT_INFO,
        isVerificationModalOpen,
        onSubmit: handleSubmit(onSubmitCallback),
        register,
        step,
        trimField,
    };
};
