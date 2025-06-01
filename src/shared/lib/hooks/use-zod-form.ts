import { zodResolver } from '@hookform/resolvers/zod';
import { FocusEventHandler, useCallback } from 'react';
import { FieldValues, Path, PathValue, useForm, UseFormSetValue } from 'react-hook-form';
import { z } from 'zod';

import { InferFormData } from '~/shared/model';

const useTrimField = <TFieldValues extends FieldValues>(
    setValue: UseFormSetValue<TFieldValues>,
): (<TName extends Path<TFieldValues>>(
    fieldName: TName,
) => FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>) =>
    useCallback(
        (fieldName) => (e) => {
            const trimmed = e.currentTarget.value.trim();
            setValue(fieldName, trimmed as PathValue<TFieldValues, Path<TFieldValues>>, {
                shouldDirty: true,
                shouldValidate: true,
            });
            e.currentTarget.value = trimmed;
        },
        [setValue],
    );

type Mode = 'onBlur' | 'onChange' | 'onSubmit' | 'onTouched' | 'all';

export const useZodForm = <T extends z.ZodTypeAny>(
    schema: T,
    options?: {
        defaultValues?: InferFormData<T>;
        mode?: Mode;
    },
) => {
    type FormData = InferFormData<T>;

    const {
        formState: { errors, dirtyFields, touchedFields, isSubmitSuccessful, isDirty },
        setValue,
        ...rest
    } = useForm<FormData>({
        defaultValues: options?.defaultValues,
        mode: options?.mode ?? 'onChange',
        resolver: zodResolver(schema),
    });

    const setValidatedValue = <TFieldName extends Path<FormData>>(
        name: TFieldName,
        value: PathValue<FormData, TFieldName>,
    ) => {
        setValue(name, value, {
            shouldDirty: true,
            shouldValidate: true,
        });
    };

    const trimField = useTrimField(setValue);

    return {
        ...rest,
        dirtyFields,
        errors,
        isDirty,
        isSubmitSuccessful,
        setValidatedValue,
        setValue,
        touchedFields,
        trimField,
    };
};
