import { createContext, Dispatch, SetStateAction } from 'react';

import { STEPS } from '../../consts/steps';

type PasswordResetContextType = {
    email: string;
    handleModalClose: () => void;
    handleResetOpen: () => void;
    setEmail: Dispatch<SetStateAction<string>>;
    setStep: Dispatch<SetStateAction<STEPS>>;
    step: STEPS;
};

export const PasswordResetContext = createContext<PasswordResetContextType | null>(null);
