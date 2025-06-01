import { useContext } from 'react';

import { RecipeDataTestAttributesContext } from '../contexts/recipe/context';

export const useRecipeDataTestAttributesContext = () => {
    const context = useContext(RecipeDataTestAttributesContext);
    if (!context) {
        throw new Error(
            'useRecipeDataAttributesContext must be used within a RecipeDataAttributesProvider',
        );
    }
    return context;
};
