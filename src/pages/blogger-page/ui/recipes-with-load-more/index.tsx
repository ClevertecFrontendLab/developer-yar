import { Stack } from '@chakra-ui/react';
import { FC, useMemo, useState } from 'react';

import { RecipeItem } from '~/entities/recipe';
import { LoadMoreButton } from '~/shared/ui/load-more-button';
import { Recipes } from '~/widgets/recipes';

import { recipesWithLoadMoreStyles as styles } from './index.styles';

type RecipesWithLoadMoreProps = {
    recipes: RecipeItem[];
};

export const RecipesWithLoadMore: FC<RecipesWithLoadMoreProps> = ({ recipes }) => {
    const [showAll, setShowAll] = useState(false);

    const visibleRecipes = useMemo(
        () => (!showAll ? recipes.slice(0, 8) : recipes),
        [recipes, showAll],
    );

    const handleShowAll = () => setShowAll(true);

    return (
        <Stack {...styles.container}>
            <Recipes recipes={visibleRecipes} />
            {!showAll && <LoadMoreButton onClick={handleShowAll} />}
        </Stack>
    );
};
