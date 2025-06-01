import { InferFormData } from '~/shared/model';

import { signInSchema } from './schemas';

export type SignInData = InferFormData<typeof signInSchema>;
export type SignInDataFieldName = keyof SignInData;
