import { LoaderFunctionArgs, redirect } from 'react-router';

import { REDIRECT_ERROR } from '~/shared/consts';
import { ROUTES } from '~/shared/routes';

import { setRecipe } from '../set-dynamic-breadcrumbs';

export const recipePageLoader = async ({ params }: LoaderFunctionArgs) => {
    try {
        const breadcrumbs = await setRecipe(params);
        return { breadcrumbs };
    } catch {
        const previousPage = document.referrer || ROUTES.HOME;
        sessionStorage.setItem(REDIRECT_ERROR.STORAGE_KEY, REDIRECT_ERROR.VALUE);
        return redirect(previousPage);
    }
};
