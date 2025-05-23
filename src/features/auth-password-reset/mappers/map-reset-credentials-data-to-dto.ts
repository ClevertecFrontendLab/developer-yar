import { ResetCredentialsDataDto } from '../dto/reset-credentials-data.dto';
import { ResetCredentialsData } from '../model/types';

export const mapResetCredentialsDataToDto = (
    data: ResetCredentialsData,
    email: string,
): ResetCredentialsDataDto => ({
    email,
    login: data.login,
    password: data.password,
    passwordConfirm: data.confirmPassword,
});
