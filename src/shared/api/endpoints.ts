const AUTH = 'auth';
const CATEGORY = 'category';
const RECIPE = 'recipe';

export const enum ENDPOINTS {
    CATEGORIES = `/${CATEGORY}`,
    DRAFT_RECIPE = '/recipe/draft',
    FORGOT_PASSWORD = `/${AUTH}/forgot-password`,
    MEASURE_INITS = '/measure-units',
    PUBLISH_RECIPE = `/${RECIPE}`,
    RECIPES = `/${RECIPE}`,
    RECIPES_BY_SUBCATEGORY = `/${RECIPE}/${CATEGORY}`,
    RECIPES_BY_USER = `/${RECIPE}/user`,
    REFRESH_TOKEN = `/${AUTH}/refresh`,
    RESET_PASSWORD = `/${AUTH}/reset-password`,
    SIGN_IN = `/${AUTH}/login`,
    SIGN_UP = `/${AUTH}/signup`,
    UPLOAD_FILE = '/file/upload',
    VALIDATE_TOKEN = `/${AUTH}/check-auth`,
    VERIFY_OTP_CODE = `/${AUTH}/verify-otp`,
    DELETE_RECIPE = `/${RECIPE}`,
    EDIT_RECIPE = `/${RECIPE}`,
    BOOKMARK_RECIPE = `/bookmark`,
    LIKE_RECIPE = `/like`,
    BLOGGERS = '/bloggers',
    FOLLOW_BLOGGER = '/users/toggle-subscription',
}
