export type ApiError = {
    data: {
        error?: string;
        message: string;
        statusCode?: number;
    };
    status: unknown;
};
