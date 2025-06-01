import { SignUpProvider } from '../contexts/sign-up/provider';
import { AuthAccountDataForm } from './auth-account-data-form';
import { AuthPersonalDataForm } from './auth-personal-data-form';
import { AuthVerificationErrorModal } from './auth-verification-error-modal';

export const SignUp = () => (
    <SignUpProvider>
        <AuthPersonalDataForm />
        <AuthAccountDataForm />
        <AuthVerificationErrorModal />
    </SignUpProvider>
);
