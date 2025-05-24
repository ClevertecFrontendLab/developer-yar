import { EmailVerificationDataDto } from '../dto/email-verification.data.dto';
import { EmailVerificationData } from '../model/types';

export const mapEmailVerificationDataToDto = (
    data: EmailVerificationData,
): EmailVerificationDataDto => data;
