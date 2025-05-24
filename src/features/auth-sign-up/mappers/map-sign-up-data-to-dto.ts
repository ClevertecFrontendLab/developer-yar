import { SignUpDataDto } from '../dto/sign-up-data.dto';
import { SignUpData } from '../model/types';

export const mapSignUpDataToDto = (data: SignUpData): SignUpDataDto => ({
    email: data.email,
    firstName: data.name,
    lastName: data.surname,
    login: data.login,
    password: data.password,
});
