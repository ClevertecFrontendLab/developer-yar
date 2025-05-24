import { z } from 'zod';

const email = z
    .string()
    .trim()
    .nonempty({ message: 'Введите e-mail' })
    .max(50, { message: 'Максимальная длина 50 символов' })
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Введите корректный e-mail');

const login = z
    .string()
    .trim()
    .nonempty({ message: 'Введите логин' })
    .min(5, { message: 'Не соответствует формату' })
    .max(50, { message: 'Максимальная длина 50 символов' })
    .regex(/^[A-Za-z0-9!@#$&_+\-.]+$/, { message: 'Не соответствует формату' });

const password = z
    .string()
    .trim()
    .nonempty({ message: 'Введите пароль' })
    .min(8, { message: 'Не соответствует формату' })
    .max(50, { message: 'Максимальная длина 50 символов' })
    .regex(/^(?=.*[A-Z])(?=.*\d)[A-Za-z0-9!@#$&_+\-.]+$/, {
        message: 'Не соответствует формату',
    });

const confirmPassword = z.string().trim().nonempty({ message: 'Повторите пароль' });

const refinePasswordsMatch = <T extends { confirmPassword: string; password: string }>(
    schema: z.ZodType<T>,
) =>
    schema.refine(({ confirmPassword, password }) => password === confirmPassword, {
        message: 'Пароли должны совпадать',
        path: ['confirmPassword'],
    });

export const validationSchemas = {
    confirmPasswordSchema: confirmPassword,
    emailSchema: email,
    loginSchema: login,
    passwordSchema: password,
};

export const validationUtils = {
    refinePasswordsMatch,
};
