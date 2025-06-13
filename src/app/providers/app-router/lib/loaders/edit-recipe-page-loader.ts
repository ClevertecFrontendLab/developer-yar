import { LoaderFunctionArgs, redirect } from 'react-router';

import { ROUTES } from '~/shared/routes';

import { setRecipe } from '../set-dynamic-breadcrumbs';

export const editRecipePageLoader = async ({ params }: LoaderFunctionArgs) => {
    try {
        const breadcrumbs = await setRecipe(params);
        return { breadcrumbs };
    } catch {
        return redirect(ROUTES.NOT_FOUND);
    }
};
