import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { InferFormData } from '../model/types';
import { useTrimField } from './use-trim-field';

type Mode = 'onBlur' | 'onChange' | 'onSubmit' | 'onTouched' | 'all';

export const useAuthForm = <T extends z.ZodTypeAny>(schema: T, mode: Mode = 'onChange') => {
    type FormData = InferFormData<T>;

    const {
        formState: { dirtyFields, errors, touchedFields },
        setValue,
        ...rest
    } = useForm<FormData>({
        mode,
        resolver: zodResolver(schema),
    });

    const trimField = useTrimField(setValue);

    return { ...rest, dirtyFields, errors, touchedFields, trimField };
};
