import { useEffect, useMemo } from 'react';

import { useLockScroll } from '~/shared/lib';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectErrorInfo } from '../selectors';
import { hideError, setLoading, showError, showSuccess } from '../slice';
import { ErrorStatus, SuccessStatus } from '../types';

const DEFAULT_ERROR_STATUS: Required<ErrorStatus> = {
    alignment: 'center',
    isError: false,
    message: {
        description: 'Попробуйте немного позже.',
        title: 'Ошибка сервера',
    },
    type: 'server',
};

const DEFAULT_SUCCESS_STATUS: Required<SuccessStatus> = {
    alignment: 'center',
    isSuccess: false,
    message: 'Успех',
};

export const useApiStatusSync = (
    isLoading: boolean,
    rawError: ErrorStatus = DEFAULT_ERROR_STATUS,
    rawSuccess: SuccessStatus = DEFAULT_SUCCESS_STATUS,
) => {
    const dispatch = useAppDispatch();
    const { errorType } = useAppSelector(selectErrorInfo);

    const error = useMemo(
        () => ({
            alignment: rawError.alignment,
            isError: rawError.isError ?? false,
            message: {
                description:
                    rawError.message?.description ?? DEFAULT_ERROR_STATUS.message.description,
                title: rawError.message?.title ?? DEFAULT_ERROR_STATUS.message.title,
            },
            type: rawError.type,
        }),
        [
            rawError.isError,
            rawError.message?.title,
            rawError.message?.description,
            rawError.alignment,
            rawError.type,
        ],
    );

    const success = useMemo(
        () => ({
            alignment: rawSuccess.alignment,
            isSuccess: rawSuccess.isSuccess,
            message: rawSuccess.message,
        }),
        [rawSuccess.isSuccess, rawSuccess.message, rawSuccess.alignment],
    );

    useLockScroll(isLoading);

    useEffect(() => {
        dispatch(setLoading(isLoading));
    }, [isLoading, dispatch]);

    useEffect(() => {
        if (error.isError) {
            dispatch(
                showError({
                    alignment: error.alignment ?? DEFAULT_ERROR_STATUS.alignment,
                    message: {
                        description:
                            error.message.description ?? DEFAULT_ERROR_STATUS.message.description,
                        title: error.message.title ?? DEFAULT_ERROR_STATUS.message.title,
                    },
                    type: error.type ?? DEFAULT_ERROR_STATUS.type,
                }),
            );
        }
    }, [
        error.isError,
        error.message.title,
        error.message.description,
        error.type,
        error.alignment,
        dispatch,
    ]);

    useEffect(() => {
        if (success.isSuccess) {
            if (errorType) {
                dispatch(hideError());
            }

            dispatch(
                showSuccess({
                    alignment: success.alignment ?? DEFAULT_SUCCESS_STATUS.alignment,
                    message: success.message ?? DEFAULT_SUCCESS_STATUS.message,
                }),
            );
        }
    }, [success.isSuccess, success.message, success.alignment, errorType, dispatch]);
};
