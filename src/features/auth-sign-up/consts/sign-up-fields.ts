import { FieldConfig, sharedAuthFields } from '~/entities/auth';
import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';

import { SignUpAccountFieldName, SignUpPersonalFieldName } from '../model/types';

export const personalDataFieldSet: FieldConfig<SignUpPersonalFieldName>[] = [
    {
        id: DATA_TEST_ATTRIBUTES.SIGN_UP_NAME_INPUT,
        label: 'Ваше имя',
        name: 'name',
        placeholder: 'Имя',
        shouldTrim: true,
    },
    {
        id: DATA_TEST_ATTRIBUTES.SIGN_UP_SURNAME_INPUT,
        label: 'Ваша фамилия',
        name: 'surname',
        placeholder: 'Фамилия',
        shouldTrim: true,
    },
    {
        id: DATA_TEST_ATTRIBUTES.SIGN_UP_EMAIL_INPUT,
        label: 'Ваш e-mail',
        name: 'email',
        placeholder: 'e-mail',
        shouldTrim: true,
    },
];

export const accountDataFieldSet: FieldConfig<SignUpAccountFieldName>[] = sharedAuthFields;
