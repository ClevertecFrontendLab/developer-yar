import { Recipe } from '~/entities/recipe';
import { useAppSelector } from '~/shared/model';

import { selectIsSearching } from '../model/selectors';

export const useSearchResultStatus = (foundRecipes: Recipe[]) => {
    const isSearching = useAppSelector(selectIsSearching);
    return !isSearching ? 'idle' : foundRecipes.length > 0 ? 'success' : 'error';
};
