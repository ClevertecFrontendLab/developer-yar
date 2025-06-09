import { EmailVerificationDataApi } from '../api/email-verification.data.api';
import { EmailVerificationData } from '../model/types';

export const mapEmailVerificationDataToApi = (
    data: EmailVerificationData,
): EmailVerificationDataApi => data;
