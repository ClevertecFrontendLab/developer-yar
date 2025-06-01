const RECIPE = 'recipe';
const AUTH = 'auth';

export const enum ENDPOINTS {
    CATEGORIES = '/category',
    DRAFT_RECIPE = '/recipe/draft',
    FORGOT_PASSWORD = `/${AUTH}/forgot-password`,
    MEASURE_INITS = '/measure-units',
    PUBLISH_RECIPE = `/${RECIPE}`,
    RECIPES = `/${RECIPE}`,
    RECIPES_BY_SUBCATEGORY = `/${RECIPE}/category`,
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
}
