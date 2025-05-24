import { FC } from 'react';

import { SuccessNotification } from '~/entities/auth';

import { AuthToastContainer } from '../auth-toast-container';

type AuthResetToastProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const AuthResetToast: FC<AuthResetToastProps> = ({ isOpen, onClose }) => (
    <AuthToastContainer>
        <SuccessNotification isOpen={isOpen} onClose={onClose}>
            Восстановление данных успешно
        </SuccessNotification>
    </AuthToastContainer>
);
