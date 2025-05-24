import { InferFormData } from '~/entities/auth';

import { signUpAccountSchema, signUpPersonalSchema } from './schemas';

export type SignUpPersonalData = InferFormData<typeof signUpPersonalSchema>;
export type SignUpAccountData = InferFormData<typeof signUpAccountSchema>;

export type SignUpData = SignUpPersonalData & SignUpAccountData;

export type SignUpPersonalFieldName = keyof SignUpPersonalData;
export type SignUpAccountFieldName = keyof SignUpAccountData;
