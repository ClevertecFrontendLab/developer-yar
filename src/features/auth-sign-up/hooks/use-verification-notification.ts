import { useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';

import { getVerificationStatus } from '../../../entities/auth/lib/get-verification-status';
import { removeVerificationStatus } from '../../../entities/auth/lib/remove-verification-status';

export const useVerificationNotification = (expectedStatus: boolean) => {
    const { isOpen, onClose, onOpen } = useDisclosure();

    const status = getVerificationStatus();

    useEffect(() => {
        if (status === expectedStatus) {
            onOpen();
            removeVerificationStatus();
        }
    }, [expectedStatus, onOpen, status]);

    return {
        isOpen,
        onClose,
        onOpen,
    };
};
