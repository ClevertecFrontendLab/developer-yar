import { useAppSelector } from '~/shared/model';

import { selectIsRecipeQueryActive } from '../model/selectors';
import { SearchResultStatus } from '../model/types';
import { useFoundRecipes } from './use-found-recipes';

export const useSearchResultStatus = () => {
    const { recipes } = useFoundRecipes();
    const isRecipeQueryActive = useAppSelector(selectIsRecipeQueryActive);
    const status: SearchResultStatus = !isRecipeQueryActive
        ? 'idle'
        : recipes.length > 0
          ? 'success'
          : 'error';
    return { isRecipeQueryActive, status };
};
