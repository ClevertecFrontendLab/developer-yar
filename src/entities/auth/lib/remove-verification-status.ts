import { VERIFICATION } from '../consts/verification';

export const removeVerificationStatus = () => sessionStorage.removeItem(VERIFICATION);
