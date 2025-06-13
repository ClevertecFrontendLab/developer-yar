import { jwtDecode } from 'jwt-decode';

import { getAccessToken } from '~/shared/api';
import { DecodedToken } from '~/shared/model';

export const decodeToken = (): DecodedToken | null => {
    const token = getAccessToken();

    if (!token) return null;
    else {
        return jwtDecode<DecodedToken>(token);
    }
};
