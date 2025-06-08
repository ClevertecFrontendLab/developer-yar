const AUTH = 'auth';
const CATEGORY_SUBCATEGORY = ':category/:subcategory';

export const ROUTES = {
    AUTH: AUTH,
    AUTH_SIGN_IN: `/${AUTH}/sign-in`,
    AUTH_SIGN_UP: `/${AUTH}/sign-up`,
    BLOGGER: `/blogs/:bloggerId`,
    BLOGS: `/blogs`,
    EDIT_RECIPE: `/edit-recipe/${CATEGORY_SUBCATEGORY}/:recipeId`,
    HOME: '/',
    NEW_RECIPE: '/new-recipe',
    NOT_FOUND: '/not-found',
    RECIPE: `/${CATEGORY_SUBCATEGORY}/:recipeId`,
    RECIPES: `/${CATEGORY_SUBCATEGORY}`,
    THE_JUICIEST: '/the-juiciest',
    VERIFICATION: `/verification`,
};
