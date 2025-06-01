import { useCallback } from 'react';
import { useBlocker } from 'react-router';

export const useUnsavedChangesWarning = (condition: boolean) => {
    const blockerCallback = useCallback(() => {
        if (condition) {
            return true;
        }
        return false;
    }, [condition]);

    const blocker = useBlocker(blockerCallback);

    return {
        isBlocked: blocker.state === 'blocked',
        proceed: () => blocker.proceed?.(),
        reset: () => blocker.reset?.(),
    };
};
