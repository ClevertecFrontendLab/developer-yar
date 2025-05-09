import { useEffect } from 'react';

import { REDIRECT_ERROR } from '~/shared/consts';

import { useAppDispatch } from '../../redux/hooks';
import { setError, setLoading } from '../slice';

export const useAppStatusSync = (isLoading: boolean, isError: boolean) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setLoading(isLoading));
    }, [isLoading, dispatch]);

    useEffect(() => {
        if (isError) dispatch(setError({ message: REDIRECT_ERROR.MESSAGE, type: 'server' }));
    }, [isError, dispatch]);
};
