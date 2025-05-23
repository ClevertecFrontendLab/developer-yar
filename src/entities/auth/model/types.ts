import { z } from 'zod';

export type InferFormData<T extends z.ZodTypeAny> = z.infer<T>;

type FieldType = 'text' | 'password';

export type FieldConfig<TFieldName extends string = string> = {
    helperText?: string;
    id: string;
    label: string;
    name: TFieldName;
    placeholder: string;
    shouldTrim?: boolean;
    type?: FieldType;
};
