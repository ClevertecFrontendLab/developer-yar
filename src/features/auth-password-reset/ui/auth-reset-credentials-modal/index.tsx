import { FC } from 'react';

import { AuthButton, AuthControls, AuthField, AuthForm, sharedAuthFields } from '~/entities/auth';
import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { ModalContentGroup, ModalHeaderText } from '~/shared/ui/modal';

import { useResetCredentialsModal } from '../../hooks/use-reset-credentials-modal';

export const AuthResetCredentialsModal: FC = () => {
    const { errors, onSubmit, register, trimField } = useResetCredentialsModal();

    return (
        <>
            <ModalContentGroup spacing={6}>
                <ModalHeaderText>Восстановление аккаунта</ModalHeaderText>

                <AuthForm onSubmit={onSubmit}>
                    <ModalContentGroup spacing={8}>
                        <AuthControls>
                            {sharedAuthFields.map((field) => (
                                <AuthField
                                    config={field}
                                    errors={errors}
                                    key={field.name}
                                    register={register}
                                    onBlur={trimField(field.name)}
                                />
                            ))}
                        </AuthControls>
                        <AuthButton
                            data-test-id={DATA_TEST_ATTRIBUTES.RESET_CREDENTIALS_SUBMIT_BUTTON}
                            type='submit'
                        >
                            Зарегистрироваться
                        </AuthButton>
                    </ModalContentGroup>
                </AuthForm>
            </ModalContentGroup>
        </>
    );
};
