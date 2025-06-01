import { FC, useEffect, useState } from 'react';

import { RecipeItem } from '~/entities/recipe';
import { useFoundRecipes } from '~/features/recipe-refinement';
import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { useApiStatusSync } from '~/shared/model';
import { LoadMoreButton } from '~/shared/ui/load-more-button';
import { FoundRecipes } from '~/widgets/found-recipes';
import { Recipes } from '~/widgets/recipes';

export const RecipesWithLoadMore: FC = () => {
    const [page, setPage] = useState(1);
    const [visibleRecipes, setVisibleRecipes] = useState<RecipeItem[]>([]);

    const {
        isRecipesError,
        isRecipesFetching,
        isRecipesLoading,
        isRecipesSuccess,
        meta,
        recipes,
        mode,
        searchQuery,
    } = useFoundRecipes({
        limit: 8,
        page,
        sortBy: 'likes',
    });

    useEffect(() => {
        if (recipes) setVisibleRecipes((prev) => [...prev, ...recipes]);
    }, [recipes]);

    useApiStatusSync(isRecipesLoading || isRecipesFetching, { isError: isRecipesError });

    if (isRecipesSuccess && visibleRecipes && meta)
        return (
            <>
                {mode === 'search' ? (
                    <FoundRecipes recipes={recipes} searchQuery={searchQuery} />
                ) : (
                    <Recipes recipes={visibleRecipes} />
                )}
                {page < meta.totalPages && (
                    <LoadMoreButton
                        data-test-id={DATA_TEST_ATTRIBUTES.LOAD_MORE_BUTTON}
                        disabled={isRecipesFetching}
                        isFetching={isRecipesFetching}
                        onClick={() => {
                            setPage((prev) => prev + 1);
                        }}
                    />
                )}
            </>
        );
    else return null;
};
