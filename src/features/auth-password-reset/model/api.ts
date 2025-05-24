import { createApi } from '@reduxjs/toolkit/query/react';

import { createBaseQuery, ENDPOINTS } from '~/shared/api';

import { EmailVerificationDataDto } from '../dto/email-verification.data.dto';
import { ResetCredentialsDataDto } from '../dto/reset-credentials-data.dto';
import { OtpCodeVerificationDataDto } from '../dto/сode-verification-data.dto';

export const passwordResetApi = createApi({
    baseQuery: createBaseQuery(),
    endpoints: (builder) => ({
        forgotPassword: builder.mutation<unknown, EmailVerificationDataDto>({
            query: (body) => ({
                body,
                method: 'POST',
                url: ENDPOINTS.FORGOT_PASSWORD,
            }),
        }),
        resetPassword: builder.mutation<unknown, ResetCredentialsDataDto>({
            query: (body) => ({
                body,
                method: 'POST',
                url: ENDPOINTS.RESET_PASSWORD,
            }),
        }),
        verifyOtpCode: builder.mutation<unknown, OtpCodeVerificationDataDto>({
            query: (body) => ({
                body,
                method: 'POST',
                url: ENDPOINTS.VERIFY_OTP_CODE,
            }),
        }),
    }),
    reducerPath: 'passwordResetApi',
});

export const { useForgotPasswordMutation, useResetPasswordMutation, useVerifyOtpCodeMutation } =
    passwordResetApi;
