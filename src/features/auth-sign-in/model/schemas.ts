import { z } from 'zod';

export const signInSchema = z.object({
    login: z
        .string()
        .trim()
        .nonempty({ message: 'Введите логин' })
        .max(50, { message: 'Максимальная длина 50 символов' }),
    password: z
        .string()
        .trim()
        .nonempty({ message: 'Введите пароль' })
        .max(50, { message: 'Максимальная длина 50 символов' }),
});
