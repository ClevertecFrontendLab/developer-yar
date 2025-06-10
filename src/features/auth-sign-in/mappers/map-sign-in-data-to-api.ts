import { SignInDataApi } from '../api/sign-in-data.api';
import { SignInData } from '../model/types';

export const mapSignInDataToApi = (data: SignInData): SignInDataApi => data;
