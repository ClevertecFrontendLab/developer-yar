export type AppStatus = {
    errorMessage: string | null;
    errorType: ErrorType;
    isLoading: boolean;
};

export type ErrorType = 'server' | 'redirect' | null;
