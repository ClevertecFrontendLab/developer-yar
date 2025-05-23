import { useState } from 'react';

import { SignUpAccountData, SignUpPersonalData } from '../../model/types';
import { Progress, SignUpContext } from './context';

export const SignUpProvider = ({ children }: { children: React.ReactNode }) => {
    const [step, setStep] = useState<number>(0);

    const [progress, setProgress] = useState<Progress>({
        account: 0,
        personal: 0,
    });

    const [formDataPersonal, setFormDataPersonal] = useState<SignUpPersonalData>({
        email: '',
        name: '',
        surname: '',
    });
    const [formDataAccount, setFormDataAccount] = useState<SignUpAccountData>({
        confirmPassword: '',
        login: '',
        password: '',
    });

    return (
        <SignUpContext.Provider
            value={{
                formDataAccount,
                formDataPersonal,
                progress,
                setFormDataAccount,
                setFormDataPersonal,
                setProgress,
                setStep,
                step,
            }}
        >
            {children}
        </SignUpContext.Provider>
    );
};
