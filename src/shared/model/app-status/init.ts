import { AppStatus } from './types';

export const initialState: AppStatus = {
    errorAlignment: 'center',
    errorMessage: {
        description: '',
        title: '',
    },
    errorType: null,
    isLoading: false,
    isSuccess: false,
    successAlignment: 'center',
    successMessage: '',
};
