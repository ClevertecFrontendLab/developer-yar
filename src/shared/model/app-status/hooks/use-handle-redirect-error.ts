import { useEffect } from 'react';
import { useNavigationType } from 'react-router';

import { REDIRECT_ERROR } from '~/shared/consts';

import { useAppDispatch } from '../../redux/hooks';
import { setError } from '../slice';

export const useHandleRedirectError = () => {
    const dispatch = useAppDispatch();
    const navigationType = useNavigationType();

    useEffect(() => {
        if (
            navigationType === 'PUSH' &&
            sessionStorage.getItem(REDIRECT_ERROR.STORAGE_KEY) === REDIRECT_ERROR.VALUE
        ) {
            dispatch(setError({ message: REDIRECT_ERROR.MESSAGE, type: 'redirect' }));
            sessionStorage.removeItem(REDIRECT_ERROR.STORAGE_KEY);
        }
    }, [dispatch, navigationType]);
};
