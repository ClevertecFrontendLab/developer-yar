import { FC } from 'react';

import { useVerificationNotification } from '~/entities/auth';
import { SuccessNotification } from '~/entities/auth';

import { AuthToastContainer } from '../auth-toast-container';

export const AuthVerificationToast: FC = () => {
    const { isOpen, onClose } = useVerificationNotification(true);

    return (
        <AuthToastContainer>
            <SuccessNotification isOpen={isOpen} onClose={onClose}>
                Верификация прошла успешно
            </SuccessNotification>
        </AuthToastContainer>
    );
};
