import { FC } from 'react';

import { PasswordResetProvider } from '../contexts/reset-password/provider';
import { PasswordResetStep } from './password-reset-step';

type PasswordResetProps = {
    handleResetOpen: () => void;
    isOpen: boolean;
    onClose: () => void;
};

export const PasswordReset: FC<PasswordResetProps> = ({ handleResetOpen, isOpen, onClose }) => (
    <PasswordResetProvider handleModalClose={onClose} handleResetOpen={handleResetOpen}>
        <PasswordResetStep isOpen={isOpen} onClose={onClose} />
    </PasswordResetProvider>
);
