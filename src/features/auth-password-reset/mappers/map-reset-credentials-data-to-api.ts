import { ResetCredentialsDataApi } from '../api/reset-credentials-data.api';
import { ResetCredentialsData } from '../model/types';

export const mapResetCredentialsDataToApi = (
    data: ResetCredentialsData,
    email: string,
): ResetCredentialsDataApi => ({
    email,
    login: data.login,
    password: data.password,
    passwordConfirm: data.confirmPassword,
});
