import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectErrorInfo } from '../selectors';
import { hideError, setLoading, showError } from '../slice';
import { AppErrorAlignment, AppErrorMessage, AppErrorType } from '../types';

const DEFAULT_MESSAGE: AppErrorMessage = {
    description: 'Попробуйте поискать снова попозже',
    title: 'Ошибка сервера',
};

const DEFAULT_ERROR_OPTIONS: ShowErrorOptions = {
    alignment: 'center',
    type: 'server',
};

export const useApiStatusSync = (
    isLoading: boolean,
    isError: boolean,
    message: AppErrorMessage = DEFAULT_MESSAGE,
    options: ShowErrorOptions = DEFAULT_ERROR_OPTIONS,
) => {
    useHideErrorWithinLoading(isLoading);

    useGlobalLoading(isLoading);
    useGlobalError(isError, message, options);
};

const useHideErrorWithinLoading = (isLoading: boolean) => {
    const dispatch = useAppDispatch();
    const { errorType } = useAppSelector(selectErrorInfo);
    useEffect(() => {
        if (isLoading && errorType) dispatch(hideError());
    }, [isLoading, dispatch, errorType]);
};

const useGlobalLoading = (isLoading: boolean) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setLoading(isLoading));
    }, [isLoading, dispatch]);
};

type ShowErrorOptions = {
    alignment?: AppErrorAlignment;
    type?: AppErrorType;
};

const useGlobalError = (
    isError: boolean,
    message: AppErrorMessage,
    { alignment, type }: ShowErrorOptions = DEFAULT_ERROR_OPTIONS,
) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (isError) dispatch(showError({ alignment, message, type }));
    }, [isError, message, type, alignment, dispatch]);
};
