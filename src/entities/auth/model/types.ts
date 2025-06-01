type FieldType = 'text' | 'password';

export type FieldConfig<TFieldName extends string = string> = {
    id: string;
    label: string;
    name: TFieldName;
    placeholder: string;
    helperText?: string;
    shouldTrim?: boolean;
    type?: FieldType;
};
