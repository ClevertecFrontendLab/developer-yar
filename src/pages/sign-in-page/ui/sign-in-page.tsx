import { useDisclosure } from '@chakra-ui/react';
import { FC, useCallback, useState } from 'react';

import { PasswordReset } from '~/features/auth-password-reset';
import { SignIn } from '~/features/auth-sign-in';

const SignInPage: FC = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const [isResetSuccessful, setIsResetSuccessful] = useState(false);

    const handleResetOpen = useCallback(() => setIsResetSuccessful(true), []);
    const handleResetClose = useCallback(() => setIsResetSuccessful(false), []);

    return (
        <>
            <SignIn
                handleResetClose={handleResetClose}
                isResetSuccessful={isResetSuccessful}
                onForgotPasswordClick={onOpen}
            />
            <PasswordReset handleResetOpen={handleResetOpen} isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default SignInPage;
