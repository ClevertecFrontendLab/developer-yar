import { redirect } from 'react-router';

import { REDIRECT_ERROR } from '~/shared/consts';
import { ROUTES } from '~/shared/routes';

export const redirectToPreviousPage = () => {
    const previousPage = document.referrer || ROUTES.HOME;
    sessionStorage.setItem(REDIRECT_ERROR.STORAGE_KEY, REDIRECT_ERROR.VALUE);
    return redirect(previousPage);
};
