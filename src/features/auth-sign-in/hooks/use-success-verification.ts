import { useEffect, useMemo } from 'react';

import { getVerificationStatus } from '~/entities/auth';
import { removeVerificationStatus } from '~/entities/auth';
import { useApiStatusSync } from '~/shared/model';

export const useSuccessVerification = () => {
    const status = useMemo(() => getVerificationStatus(), []);

    useApiStatusSync(false, undefined, {
        alignment: 'left',
        isSuccess: Boolean(status),
        message: 'Верификация прошла успешно',
    });

    useEffect(() => {
        removeVerificationStatus();
    }, []);
};
