import { createContext } from 'react';

type RecipeDataTestAttributesContextType = {
    recipeImageBlock: string;
    recipeImageBlockInputFile: string;
    recipeImageBlockPreviewImage: string;
};

export const RecipeDataTestAttributesContext =
    createContext<RecipeDataTestAttributesContextType | null>(null);
