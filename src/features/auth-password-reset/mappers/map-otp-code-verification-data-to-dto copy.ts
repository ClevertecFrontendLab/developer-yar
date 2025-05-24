import { OtpCodeVerificationDataDto } from '../dto/сode-verification-data.dto';
import { OtpCodeVerificationData } from '../model/types';

export const mapOtpCodeVerificationDataToDto = ({
    email,
    otpCode,
}: OtpCodeVerificationData): OtpCodeVerificationDataDto => ({
    email,
    otpToken: otpCode,
});
