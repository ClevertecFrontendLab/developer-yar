import { FC } from 'react';

import {
    ModalContentGroup,
    ModalFooterText,
    ModalHeaderText,
    ModalIllustration,
    ModalText,
    ModalTextGroup,
} from '~/shared/ui/modal';

import authCodeVerificationImage from '../../assets/auth-code-verification-image.svg';
import { useCodeVerificationModal } from '../../hooks/use-code-verification-modal';
import { AuthOtpCodeInput } from './auth-otp-code';

export const AuthCodeVerificationModal: FC = () => {
    const { email, handleOtpCodeChange, isInvalidOtpCode, otpCode } = useCodeVerificationModal();

    return (
        <>
            <ModalIllustration src={authCodeVerificationImage} />

            <ModalContentGroup spacing={6}>
                <ModalContentGroup>
                    {isInvalidOtpCode && <ModalHeaderText>Неверный код</ModalHeaderText>}
                    <ModalTextGroup>
                        <ModalText>Мы отправили вам на e-mail</ModalText>
                        <ModalText weight='bold'>{email}</ModalText>
                        <ModalText>шестизначный код. Введите его ниже.</ModalText>
                    </ModalTextGroup>
                    <AuthOtpCodeInput
                        isInvalid={isInvalidOtpCode}
                        value={otpCode}
                        onChange={handleOtpCodeChange}
                    />
                </ModalContentGroup>
                <ModalFooterText>Не пришло письмо? Проверьте папку Спам.</ModalFooterText>
            </ModalContentGroup>
        </>
    );
};
