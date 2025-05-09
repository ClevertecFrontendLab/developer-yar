import { useAppSelector } from '~/shared/model';

import { selectIsRecipeQueryActive } from '../model/selectors';
import { useFoundRecipes } from './use-found-recipes';

export const useSearchResultStatus = () => {
    const { recipes } = useFoundRecipes();
    const isRecipeQueryActive = useAppSelector(selectIsRecipeQueryActive);
    const status = !isRecipeQueryActive ? 'idle' : recipes.length > 0 ? 'success' : 'error';
    return { isRecipeQueryActive, status };
};
