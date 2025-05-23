import { TOKEN } from '~/shared/api';

export const saveAccessToken = (token: string) => localStorage.setItem(TOKEN, token);
