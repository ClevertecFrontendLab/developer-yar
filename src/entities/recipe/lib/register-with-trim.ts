import { UseFormRegister } from 'react-hook-form';

import { RecipeFormData } from '../model/types';

const mergeOnBlur =
    (
        original?: React.FocusEventHandler<unknown>,
        custom?: React.FocusEventHandler<unknown>,
    ): React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> =>
    (e) => {
        custom?.(e);
        original?.(e);
    };

export const registerWithTrim = (
    name: keyof RecipeFormData,
    register: UseFormRegister<RecipeFormData>,
    trimField: (
        field: keyof RecipeFormData,
    ) => React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>,
) => {
    const { onBlur, ...rest } = register(name);
    return {
        ...rest,
        onBlur: mergeOnBlur(onBlur, trimField(name)),
    };
};
