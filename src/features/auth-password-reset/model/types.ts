import { InferFormData } from '~/entities/auth';

import { schemas } from './schemas';

export type EmailVerificationData = InferFormData<typeof schemas.emailVerificationSchema>;
export type ResetCredentialsData = InferFormData<typeof schemas.resetCredentialsSchema>;

export type OtpCodeVerificationData = {
    email: string;
    otpCode: string;
};
