const CATEGORY_SUBCATEGORY = '/:category/:subcategory';
const AUTH = '/auth';

export const ROUTES = {
    AUTH: AUTH,
    AUTH_SIGN_IN: `${AUTH}/sign-in`,
    AUTH_SIGN_UP: `${AUTH}/sign-up`,
    HOME: '/',
    NOT_FOUND: '/not-found',
    RECIPE: `${CATEGORY_SUBCATEGORY}/:id`,
    RECIPES: CATEGORY_SUBCATEGORY,
    THE_JUICIEST: '/the-juiciest',
    VERIFICATION: `/verification`,
};
