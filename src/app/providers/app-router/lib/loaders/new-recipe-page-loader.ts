import { ROUTES } from '~/shared/routes';

export const newRecipePageLoader = async () => {
    const breadcrumbs = [
        {
            title: 'Новый рецепт',
            url: ROUTES.NEW_RECIPE,
        },
    ];
    return { breadcrumbs };
};
