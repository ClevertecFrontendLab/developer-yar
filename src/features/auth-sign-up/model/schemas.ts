import { z } from 'zod';

import { validationSchemas, validationUtils } from '~/entities/auth';

export const signUpPersonalSchema = z.object({
    email: validationSchemas.emailSchema,
    name: z
        .string()
        .trim()
        .nonempty({ message: 'Введите имя' })
        .max(50, { message: 'Максимальная длина 50 символов' })
        .regex(/^[А-ЯЁ]/, 'Должно начинаться с кириллицы А-Я')
        .regex(/^[А-Яа-яЁё]+(-[А-Яа-яЁё]+)*$/, 'Только кириллица А-Я, и "-"'),
    surname: z
        .string()
        .trim()
        .nonempty({ message: 'Введите фамилию' })
        .max(50, { message: 'Максимальная длина 50 символов' })
        .regex(/^[А-ЯЁ]/, 'Должно начинаться с кириллицы А-Я')
        .regex(/^[А-Яа-яЁё]+(-[А-Яа-яЁё]+)*$/, 'Только кириллица А-Я, и "-"'),
});

export const signUpAccountSchema = validationUtils.refinePasswordsMatch(
    z.object({
        confirmPassword: validationSchemas.confirmPasswordSchema,
        login: validationSchemas.loginSchema,
        password: validationSchemas.passwordSchema,
    }),
);
