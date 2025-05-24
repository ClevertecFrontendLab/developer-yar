import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';

import { FieldConfig } from '../model/types';

type SharedAuthFieldset = 'login' | 'password' | 'confirmPassword';

export const sharedAuthFields: FieldConfig<SharedAuthFieldset>[] = [
    {
        helperText: 'Логин не менее 5 символов, только латиница',
        id: DATA_TEST_ATTRIBUTES.SIGN_UP_LOGIN_INPUT,
        label: 'Логин для входа на сайт',
        name: 'login',
        placeholder: 'Логин',
        shouldTrim: true,
    },
    {
        helperText: 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
        id: DATA_TEST_ATTRIBUTES.SIGN_UP_PASSWORD_INPUT,
        label: 'Пароль',
        name: 'password',
        placeholder: 'Пароль',
        shouldTrim: false,
        type: 'password',
    },
    {
        id: DATA_TEST_ATTRIBUTES.SIGN_UP_CONFIRM_PASSWORD_INPUT,
        label: 'Повторите пароль',
        name: 'confirmPassword',
        placeholder: 'Пароль',
        shouldTrim: false,
        type: 'password',
    },
];
