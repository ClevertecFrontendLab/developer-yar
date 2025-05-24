import { SignInDataDto } from '../dto/sign-in-data.dto';
import { SignInData } from '../model/types';

export const mapSignInDataToDto = (data: SignInData): SignInDataDto => data;
