import { ApiError } from '~/shared/api';

export const isApiError = (error: unknown): error is ApiError =>
    Boolean(
        error &&
            typeof error === 'object' &&
            'data' in error &&
            error.data &&
            'status' in error &&
            error.status,
    );
