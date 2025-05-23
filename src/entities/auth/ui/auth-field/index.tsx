import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { AuthControl, AuthFeedback, AuthInput, AuthLabel } from '~/entities/auth';

import { FieldConfig } from '../../model/types';

type AuthFieldProps<TFormValues extends FieldValues> = {
    config: FieldConfig<Path<TFormValues>>;
    errors: FieldErrors<TFormValues>;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    register: UseFormRegister<TFormValues>;
};

export const AuthField = <TFormValues extends FieldValues>({
    config,
    errors,
    onBlur,
    register,
}: AuthFieldProps<TFormValues>) => {
    const { helperText, id, label, name, placeholder, shouldTrim, type = 'text' } = config;

    const rawError = errors[name];
    const fieldError = typeof rawError?.message === 'string' ? rawError?.message : undefined;

    const { onBlur: rhfOnBlur, ...restRegister } = register(name);

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (shouldTrim) {
            onBlur(e);
        }
        rhfOnBlur?.(e);
    };

    return (
        <AuthControl isInvalid={!!fieldError}>
            <AuthLabel>{label}</AuthLabel>
            <AuthInput
                placeholder={placeholder}
                type={type}
                {...restRegister}
                data-test-id={id}
                onBlur={shouldTrim ? handleBlur : rhfOnBlur}
            />
            <AuthFeedback error={fieldError} helper={helperText} />
        </AuthControl>
    );
};
