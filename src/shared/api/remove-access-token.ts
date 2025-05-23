import { TOKEN } from '~/shared/api';

export const removeAccessToken = () => localStorage.removeItem(TOKEN);
