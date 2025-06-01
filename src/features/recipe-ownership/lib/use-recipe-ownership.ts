import { jwtDecode } from 'jwt-decode';

import { getAccessToken } from '~/shared/api';

type DecodedToken = {
    [key: string]: unknown;
    userId: string;
};

export const getRecipeOwnership = (authorId: string): boolean => {
    const token = getAccessToken();
    if (!token) return false;
    else {
        const decodedToken = jwtDecode<DecodedToken>(token);
        return decodedToken.userId === authorId;
    }
};
