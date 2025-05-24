import { AuthButton, AuthControls } from '~/entities/auth';
import { AuthField } from '~/entities/auth';
import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';

import { personalDataFieldSet } from '../../consts/sign-up-fields';
import { useSignUpPersonalForm } from '../../hooks/use-sign-up-personal-form';
import { AuthForm } from '../auth-form';
import { AuthProgressBar } from '../auth-progress-bar';

export const AuthPersonalDataForm = () => {
    const { errors, isActiveForm, onSubmit, register, trimField } = useSignUpPersonalForm();

    if (isActiveForm)
        return (
            <AuthForm data-test-id={DATA_TEST_ATTRIBUTES.SIGN_UP_FORM} onSubmit={onSubmit}>
                <AuthProgressBar />

                <AuthControls>
                    {personalDataFieldSet.map((field) => (
                        <AuthField
                            config={field}
                            errors={errors}
                            key={field.name}
                            register={register}
                            onBlur={trimField(field.name)}
                        />
                    ))}
                </AuthControls>

                <AuthButton data-test-id={DATA_TEST_ATTRIBUTES.SIGN_UP_SUBMIT_BUTTON} type='submit'>
                    Дальше
                </AuthButton>
            </AuthForm>
        );
    else return null;
};
