import { createApi } from '@reduxjs/toolkit/query/react';

import { createBaseQuery, ENDPOINTS } from '~/shared/api';

import { EmailVerificationDataApi } from '../api/email-verification.data.api';
import { ResetCredentialsDataApi } from '../api/reset-credentials-data.api';
import { OtpCodeVerificationDataApi } from '../api/сode-verification-data.api';

export const passwordResetApi = createApi({
    baseQuery: createBaseQuery(),
    endpoints: (builder) => ({
        forgotPassword: builder.mutation<unknown, EmailVerificationDataApi>({
            query: (body) => ({
                body,
                method: 'POST',
                url: ENDPOINTS.FORGOT_PASSWORD,
            }),
        }),
        resetPassword: builder.mutation<unknown, ResetCredentialsDataApi>({
            query: (body) => ({
                body,
                method: 'POST',
                url: ENDPOINTS.RESET_PASSWORD,
            }),
        }),
        verifyOtpCode: builder.mutation<unknown, OtpCodeVerificationDataApi>({
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
