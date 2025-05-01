import { FC } from 'react';

import { useGetAllRecipesQuery } from '~/entities/recipe';

import { useFoundRecipes } from '../hooks/use-found-recipes';
import { useSearchResultStatus } from '../hooks/use-search-result-status';
import { SearchRecipesInput } from './search-recipes-input/search-recipes-input';

export const SearchRecipes: FC = () => {
    const { data = [] } = useGetAllRecipesQuery();
    const { recipes } = useFoundRecipes(data);
    const status = useSearchResultStatus(recipes);

    return <SearchRecipesInput searchResultStatus={status} />;
};
