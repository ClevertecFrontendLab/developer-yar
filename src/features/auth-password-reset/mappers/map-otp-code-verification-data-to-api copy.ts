import { OtpCodeVerificationDataApi } from '../api/сode-verification-data.api';
import { OtpCodeVerificationData } from '../model/types';

export const mapOtpCodeVerificationDataToApi = ({
    email,
    otpCode,
}: OtpCodeVerificationData): OtpCodeVerificationDataApi => ({
    email,
    otpToken: otpCode,
});
