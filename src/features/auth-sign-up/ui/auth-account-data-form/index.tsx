import { AuthButton, AuthControls } from '~/entities/auth';
import { AuthField } from '~/entities/auth';
import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';

import { accountDataFieldSet } from '../../consts/sign-up-fields';
import { useSignUpAccountForm } from '../../hooks/use-sign-up-account-form';
import { AuthForm } from '../auth-form';
import { AuthProgressBar } from '../auth-progress-bar';
import { AuthVerificationNoticeModal } from '../auth-verification-notice-modal';

export const AuthAccountDataForm = () => {
    const {
        closeVerificationModal,
        email,
        errors,
        isActiveForm,
        isVerificationModalOpen,
        onSubmit,
        register,
        trimField,
    } = useSignUpAccountForm();

    if (isActiveForm)
        return (
            <>
                <AuthForm data-test-id={DATA_TEST_ATTRIBUTES.SIGN_UP_FORM} onSubmit={onSubmit}>
                    <AuthProgressBar />

                    <AuthControls>
                        {accountDataFieldSet.map((field) => (
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
                        data-test-id={DATA_TEST_ATTRIBUTES.SIGN_UP_SUBMIT_BUTTON}
                        type='submit'
                    >
                        Зарегистрироваться
                    </AuthButton>
                </AuthForm>
                <AuthVerificationNoticeModal
                    email={email}
                    isOpen={isVerificationModalOpen}
                    onClose={closeVerificationModal}
                />
            </>
        );
    return null;
};
