import { useCallback } from 'react';
import type { FieldValues, Path, PathValue, UseFormSetValue } from 'react-hook-form';

export function useTrimField<TFieldValues extends FieldValues>(
    setValue: UseFormSetValue<TFieldValues>,
) {
    return useCallback(
        (fieldName: Path<TFieldValues>) => (e: React.FocusEvent<HTMLInputElement>) => {
            const trimmed = e.currentTarget.value.trim();
            setValue(fieldName, trimmed as PathValue<TFieldValues, Path<TFieldValues>>, {
                shouldDirty: true,
                shouldValidate: true,
            });

            e.currentTarget.value = trimmed;
        },
        [setValue],
    );
}
