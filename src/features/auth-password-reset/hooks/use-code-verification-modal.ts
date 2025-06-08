import { useCallback, useEffect, useState } from 'react';

import { ApiError, ERRORS, isApiError } from '~/shared/api';
import { AppErrorMessage, useApiStatusSync } from '~/shared/model';

import { STEPS } from '../consts/steps';
import { mapOtpCodeVerificationDataToDto } from '../mappers/map-otp-code-verification-data-to-dto copy';
import { useVerifyOtpCodeMutation } from '../model/api';
import { OtpCodeVerificationData } from '../model/types';
import { usePasswordResetContext } from './use-password-reset-context';

const mapErrorToMessage = (error: ApiError) => {
    switch (error.status) {
        case ERRORS.INTERNAL_SERVER_ERRROR:
            return {
                description: 'Попробуйте немного позже.',
                title: 'Ошибка сервера',
            };
        default:
            return undefined;
    }
};

export const useCodeVerificationModal = () => {
    const { email, setStep } = usePasswordResetContext();

    const [isInvalidOtpCode, setIsInvalidOtpCode] = useState(false);

    const [otpCode, setOtpCode] = useState('');

    const [errorMessage, setErrorMessage] = useState<AppErrorMessage>();

    const handleOtpCodeChange = (value: string) => {
        setOtpCode(value);
    };

    const [verifyOtpCode, { isError, isLoading }] = useVerifyOtpCodeMutation();

    const onSubmitCallback = useCallback(
        async (data: OtpCodeVerificationData) => {
            const dto = mapOtpCodeVerificationDataToDto(data);

            setOtpCode('');
            setIsInvalidOtpCode(false);

            try {
                await verifyOtpCode(dto).unwrap();

                setStep(STEPS.RESET_CREDENTIALS);
            } catch (error) {
                if (isApiError(error)) {
                    if (error.status === ERRORS.FORBIDDEN) setIsInvalidOtpCode(true);
                    const message = mapErrorToMessage(error);
                    setErrorMessage(message);
                }
            }
        },
        [setStep, verifyOtpCode],
    );

    useEffect(() => {
        if (otpCode.length === 6) {
            onSubmitCallback({
                email,
                otpCode,
            });
        }
    }, [email, onSubmitCallback, otpCode]);

    useApiStatusSync(isLoading, { isError: isError, message: errorMessage, type: 'auth' });

    return {
        email,
        handleOtpCodeChange,
        isInvalidOtpCode,
        otpCode,
    };
};
