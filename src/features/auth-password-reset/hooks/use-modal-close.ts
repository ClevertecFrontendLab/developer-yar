import { STEPS } from '../consts/steps';
import { usePasswordResetContext } from './use-password-reset-context';

export const useModalClose = (onClose: () => void) => {
    const { setEmail, setStep } = usePasswordResetContext();

    const handleModalClose = () => {
        setStep(STEPS.EMAIL_VERIFICATION);
        setEmail('');
        onClose();
    };

    return { handleModalClose };
};
