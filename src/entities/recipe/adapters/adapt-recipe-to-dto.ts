import { RecipeCreationDto } from '../dto/recipe-creation.dto';
import { RecipeFormData } from '../model/types';

export const adaptRecipeToDto = (recipe: RecipeFormData): RecipeCreationDto => ({
    categoriesIds: recipe.subcategories,
    description: recipe.description,
    image: recipe.image.replace(`${import.meta.env.VITE_IMAGES_API_URL}/`, ''),
    ingredients: recipe.ingredients,
    portions: recipe.portions,
    steps: recipe.steps.map(({ description, image }, index) => ({
        description,
        image: image ? image.replace(`${import.meta.env.VITE_IMAGES_API_URL}/`, '') : null,
        stepNumber: index + 1,
    })),
    time: recipe.time,
    title: recipe.title,
});
