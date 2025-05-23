import { FC, PropsWithChildren, useState } from 'react';

import { STEPS } from '../../consts/steps';
import { PasswordResetContext } from './context';

type PasswordResetProviderProps = PropsWithChildren<{
    handleModalClose: () => void;
    handleResetOpen: () => void;
}>;

export const PasswordResetProvider: FC<PasswordResetProviderProps> = ({
    children,
    handleModalClose,
    handleResetOpen,
}) => {
    const [step, setStep] = useState<STEPS>(STEPS.EMAIL_VERIFICATION);
    const [email, setEmail] = useState('');

    return (
        <PasswordResetContext.Provider
            value={{ email, handleModalClose, handleResetOpen, setEmail, setStep, step }}
        >
            {children}
        </PasswordResetContext.Provider>
    );
};
