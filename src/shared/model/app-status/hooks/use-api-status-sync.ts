import { useEffect, useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectErrorInfo } from '../selectors';
import { hideError, setLoading, showError, showSuccess } from '../slice';
import { AppErrorMessage, AppErrorType, AppMessageAlignment } from '../types';

type ErrorStatus = {
    alignment?: AppMessageAlignment;
    isError?: boolean;
    message?: AppErrorMessage;
    type?: AppErrorType;
};

type SuccessStatus = {
    alignment?: AppMessageAlignment;
    isSuccess?: boolean;
    message?: string;
};

const DEFAULT_ERROR_STATUS: Required<ErrorStatus> = {
    alignment: 'center',
    isError: false,
    message: {
        description: 'Попробуйте поискать снова попозже',
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
    const error = useMemo(
        () => rawError,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [
            rawError.isError,
            rawError.message?.title,
            rawError.message?.description,
            rawError.alignment,
            rawError.type,
        ],
    );

    const success = useMemo(
        () => rawSuccess,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [rawSuccess.isSuccess, rawSuccess.message, rawSuccess.alignment],
    );

    useGlobalLoading(isLoading);

    useHideErrorIfSuccess(success.isSuccess);

    useGlobalError(
        error.isError ?? DEFAULT_ERROR_STATUS.isError,
        error.message ?? DEFAULT_ERROR_STATUS.message,
        error.type ?? DEFAULT_ERROR_STATUS.type,
        error.alignment ?? DEFAULT_ERROR_STATUS.alignment,
    );

    useGlobalSuccess(
        success.isSuccess ?? DEFAULT_SUCCESS_STATUS.isSuccess,
        success.message ?? DEFAULT_SUCCESS_STATUS.message,
        success.alignment ?? DEFAULT_SUCCESS_STATUS.alignment,
    );
};

const useHideErrorIfSuccess = (isSuccess?: boolean) => {
    const dispatch = useAppDispatch();
    const { errorType } = useAppSelector(selectErrorInfo);

    useEffect(() => {
        if (isSuccess && errorType) {
            dispatch(hideError());
        }
    }, [isSuccess, errorType, dispatch]);
};

const useGlobalLoading = (isLoading: boolean) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setLoading(isLoading));
    }, [isLoading, dispatch]);
};

const useGlobalError = (
    isError: boolean,
    message: AppErrorMessage,
    type: AppErrorType,
    alignment: AppMessageAlignment,
) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isError) {
            dispatch(showError({ alignment, message, type }));
        }
    }, [isError, message, type, alignment, dispatch]);
};

const useGlobalSuccess = (isSuccess: boolean, message: string, alignment: AppMessageAlignment) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isSuccess) {
            dispatch(showSuccess({ alignment, message }));
        }
    }, [isSuccess, message, alignment, dispatch]);
};
