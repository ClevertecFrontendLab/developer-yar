import { useContext } from 'react';

import { PasswordResetContext } from '../contexts/reset-password/context';

export const usePasswordResetContext = () => {
    const context = useContext(PasswordResetContext);
    if (!context) {
        throw new Error('usePasswordResetContext must be used within a PasswordResetProvider');
    }
    return context;
};
