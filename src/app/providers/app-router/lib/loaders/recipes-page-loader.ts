import { LoaderFunctionArgs, redirect } from 'react-router';

import { ROUTES } from '~/shared/routes';

import { setCategoryAndSubcategory } from '../set-dynamic-breadcrumbs';

export const recipesPageloader = async ({ params }: LoaderFunctionArgs) => {
    try {
        const breadcrumbs = await setCategoryAndSubcategory(params);
        return { breadcrumbs };
    } catch {
        return redirect(ROUTES.NOT_FOUND);
    }
};
