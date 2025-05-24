import { InferFormData } from '~/entities/auth';

import { signInSchema } from './schemas';

export type SignInData = InferFormData<typeof signInSchema>;
export type SignInDataFieldName = keyof SignInData;
