import { createContext } from 'react';

type RecipeDataTestAttributesContextType = {
    recipeImageBlock?: string;
    recipeImageBlockInputFile?: string;
    recipeImageBlockPreviewImage?: string;
    recipeStepsImageBlock?: string;
    recipeStepsImageBlockInputFile?: string;
    recipeStepsImageBlockPreviewImage?: string;
};

export const RecipeDataTestAttributesContext =
    createContext<RecipeDataTestAttributesContextType | null>(null);
