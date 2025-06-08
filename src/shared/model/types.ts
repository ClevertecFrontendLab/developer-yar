import z from 'zod';

export type InferFormData<T extends z.ZodTypeAny> = z.infer<T>;

export type DecodedToken = {
    [key: string]: unknown;
    userId: string;
};
