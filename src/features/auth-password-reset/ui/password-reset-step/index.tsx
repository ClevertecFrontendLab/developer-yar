import { FC, useEffect } from 'react';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { Modal, ModalBody, ModalContent, ModalOverlay } from '~/shared/ui/modal';
import { ModalCloseIcon } from '~/shared/ui/modal';

import { STEPS } from '../../consts/steps';
import { usePasswordResetContext } from '../../hooks/use-password-reset-context';
import { AuthCodeVerificationModal } from '../auth-code-verification-modal';
import { AuthEmailVerificationModal } from '../auth-email-verification-modal';
import { AuthResetCredentialsModal } from '../auth-reset-credentials-modal';

type PasswordResetStepProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const PasswordResetStep: FC<PasswordResetStepProps> = ({ isOpen, onClose }) => {
    const { setEmail, setStep, step } = usePasswordResetContext();

    let StepComponent;
    let id;

    switch (step) {
        case STEPS.EMAIL_VERIFICATION:
            StepComponent = <AuthEmailVerificationModal />;
            id = DATA_TEST_ATTRIBUTES.EMAIL_VERIFICATION_MODAL;
            break;
        case STEPS.CODE_VERIFICATION:
            StepComponent = <AuthCodeVerificationModal />;
            id = DATA_TEST_ATTRIBUTES.OTP_CODE_VERIFICATION_MODAL;
            break;
        case STEPS.RESET_CREDENTIALS:
            StepComponent = <AuthResetCredentialsModal />;
            id = DATA_TEST_ATTRIBUTES.RESET_CREDENTIALS_MODAL;
            break;
        default:
            StepComponent = null;
    }

    useEffect(() => {
        if (!isOpen) {
            setStep(STEPS.EMAIL_VERIFICATION);
            setEmail('');
        }
    }, [isOpen, setStep, setEmail]);

    return (
        <Modal data-test-id={id} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseIcon />
                <ModalBody>{StepComponent}</ModalBody>
            </ModalContent>
        </Modal>
    );
};
