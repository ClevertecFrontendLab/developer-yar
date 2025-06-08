import { decodeToken } from '~/shared/lib';

export const getCurrentUserId = (): string => decodeToken()?.userId ?? '';
