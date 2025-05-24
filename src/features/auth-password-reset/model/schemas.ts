import { z } from 'zod';

import { validationSchemas, validationUtils } from '~/entities/auth';

const emailVerificationSchema = z.object({
    email: validationSchemas.emailSchema,
});

const resetCredentialsSchema = validationUtils.refinePasswordsMatch(
    z.object({
        confirmPassword: validationSchemas.confirmPasswordSchema,
        login: validationSchemas.loginSchema,
        password: validationSchemas.passwordSchema,
    }),
);

export const schemas = {
    emailVerificationSchema,
    resetCredentialsSchema,
};
