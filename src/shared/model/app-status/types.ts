export type AppErrorType = 'server' | 'redirect';
export type AppErrorMessage = {
    description?: string;
    title: string;
};

export type AppErrorAlignment = 'left' | 'center' | 'right';

export type AppStatus = {
    errorAlignment: AppErrorAlignment;
    errorMessage: AppErrorMessage;
    errorType: AppErrorType | null;
    isLoading: boolean;
};
