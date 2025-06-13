export type ApiError = {
    data: {
        message: string;
        error?: string;
        statusCode?: number;
    };
    status: unknown;
};
