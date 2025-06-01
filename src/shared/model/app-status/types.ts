export type AppErrorType = 'auth' | 'server' | 'redirect';
export type AppErrorMessage = {
    description?: string;
    title: string;
};

export type AppMessageAlignment = 'left' | 'center' | 'right';

export type AppStatus = {
    errorAlignment: AppMessageAlignment;
    errorMessage: AppErrorMessage;
    errorType: AppErrorType | null;
    isLoading: boolean;
    isSuccess: boolean;
    successAlignment: AppMessageAlignment;
    successMessage: string;
};

export type ErrorStatus = {
    alignment?: AppMessageAlignment;
    isError?: boolean;
    message?: AppErrorMessage;
    type?: AppErrorType;
};

export type SuccessStatus = {
    alignment?: AppMessageAlignment;
    isSuccess?: boolean;
    message?: string;
};
