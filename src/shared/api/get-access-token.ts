import { TOKEN } from '~/shared/api';

export const getAccessToken = () => localStorage.getItem(TOKEN);
