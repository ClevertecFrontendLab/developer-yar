import { useEffect } from 'react';

import { useAuthForm } from '~/entities/auth';

import { PERSONAL_FIELDS } from '../consts/fields';
import { personalDataFieldSet as fields } from '../consts/sign-up-fields';
import { STEPS } from '../consts/steps';
import { signUpPersonalSchema } from '../model/schemas';
import { SignUpPersonalData } from '../model/types';
import { useSignUpContext } from './use-sign-up-context';

export const useSignUpPersonalForm = () => {
    const { dirtyFields, errors, handleSubmit, register, trimField } =
        useAuthForm(signUpPersonalSchema);

    const { setFormDataPersonal, setProgress, setStep, step } = useSignUpContext();

    const onSubmitCallback = (data: SignUpPersonalData) => {
        setFormDataPersonal(data);
        setStep(STEPS.ACCOUNT_INFO);
    };

    const validCount = fields.filter(({ name }) => dirtyFields[name] && !errors[name]).length;
    const personalProgress = (validCount / PERSONAL_FIELDS) * 50;

    useEffect(() => {
        setProgress((prev) => ({ ...prev, personal: personalProgress }));
    }, [personalProgress, setProgress]);

    return {
        errors,
        isActiveForm: step === STEPS.PERSONAL_INFO,
        onSubmit: handleSubmit(onSubmitCallback),
        register,
        trimField,
    };
};
