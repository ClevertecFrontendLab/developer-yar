import { useContext } from 'react';

import { SignUpContext } from '../contexts/sign-up/context';

export const useSignUpContext = () => {
    const context = useContext(SignUpContext);
    if (!context) {
        throw new Error('useSignUpContext must be used within a SignUpProvider');
    }
    return context;
};
