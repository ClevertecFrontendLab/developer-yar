import { FC } from 'react';

import {
    AuthButton,
    AuthControl,
    AuthControls,
    AuthFeedback,
    AuthForm,
    AuthInput,
    AuthLabel,
} from '~/entities/auth';
import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import {
    ModalContentGroup,
    ModalFooterText,
    ModalIllustration,
    ModalText,
    ModalTextGroup,
} from '~/shared/ui/modal';

import autEmailVerificationImage from '../../assets/auth-email-verification-image.svg';
import { useEmailVerificationModal } from '../../hooks/use-email-verification-modal';

export const AuthEmailVerificationModal: FC = () => {
    const { errors, onSubmit, register, trimField } = useEmailVerificationModal();

    return (
        <>
            <ModalIllustration src={autEmailVerificationImage} />

            <ModalContentGroup>
                <ModalTextGroup>
                    <ModalText>
                        Для восстановления входа введите ваш e-mail, куда можно отправить уникальный
                        код
                    </ModalText>
                </ModalTextGroup>
                <AuthForm onSubmit={onSubmit}>
                    <ModalContentGroup spacing={6}>
                        <AuthControls>
                            <AuthControl isInvalid={Boolean(errors.email)}>
                                <AuthLabel>Ваш e-mail</AuthLabel>
                                <AuthInput
                                    placeholder='e-mail'
                                    {...register('email')}
                                    data-test-id={DATA_TEST_ATTRIBUTES.EMAIL_VERIFICATION_INPUT}
                                    onBlur={trimField('email')}
                                />
                                <AuthFeedback error={errors.email?.message} />
                            </AuthControl>
                        </AuthControls>
                        <AuthButton
                            data-test-id={DATA_TEST_ATTRIBUTES.EMAIL_VERIFICATION_SUBMIT_BUTTON}
                            type='submit'
                        >
                            Получить код
                        </AuthButton>
                        <ModalFooterText>Не пришло письмо? Проверьте папку Спам.</ModalFooterText>
                    </ModalContentGroup>
                </AuthForm>
            </ModalContentGroup>
        </>
    );
};
