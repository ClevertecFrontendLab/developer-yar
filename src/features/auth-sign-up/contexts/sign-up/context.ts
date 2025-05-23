import { createContext } from 'react';
import { Dispatch, SetStateAction } from 'react';

import { SignUpAccountData, SignUpPersonalData } from '../../model/types';

export type Progress = {
    account: number;
    personal: number;
};

export type SignUpContextType = {
    formDataAccount: SignUpAccountData;
    formDataPersonal: SignUpPersonalData;
    progress: Progress;
    setFormDataAccount: Dispatch<SetStateAction<SignUpAccountData>>;

    setFormDataPersonal: Dispatch<SetStateAction<SignUpPersonalData>>;
    setProgress: React.Dispatch<React.SetStateAction<Progress>>;

    setStep: Dispatch<SetStateAction<number>>;
    step: number;
};

export const SignUpContext = createContext<SignUpContextType | null>(null);
