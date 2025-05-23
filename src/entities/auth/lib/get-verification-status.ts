import { VERIFICATION } from '../consts/verification';

export const getVerificationStatus = (): boolean | null => {
    const raw = sessionStorage.getItem(VERIFICATION);

    switch (raw) {
        case 'true':
            return true;
        case 'false':
            return false;
        default:
            return null;
    }
};
