import { SignUpDataApi } from '../api/sign-up-data.api';
import { SignUpData } from '../model/types';

export const mapSignUpDataToApi = (data: SignUpData): SignUpDataApi => ({
    email: data.email,
    firstName: data.name,
    lastName: data.surname,
    login: data.login,
    password: data.password,
});
