import { Grid } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { RecipeGalleryCard, useRecipesBySubcategoryId } from '~/entities/recipe';
import { AddRecipeToFavoritesButton } from '~/features/add-recipe-to-favorites';
import { CookRecipeButton } from '~/features/cook-recipe';
import { useAppStatusSync } from '~/shared/model';

import { subcategoryPanelStyles as styles } from './index.styles';

type SubcategoryPanelProps = { subcategoryId: string };

export const SubcategoryPanel: FC<SubcategoryPanelProps> = memo(({ subcategoryId }) => {
    const {
        data: recipes,
        isLoading: isRecipesLoading,
        isError: isRecipesError,
        isSuccess: isRecipesSuccess,
    } = useRecipesBySubcategoryId(subcategoryId);

    useAppStatusSync(isRecipesLoading, isRecipesError);

    if (isRecipesSuccess && recipes)
        return (
            <Grid {...styles.gridTabContent}>
                {recipes.map((recipe, index) => (
                    <RecipeGalleryCard
                        key={recipe.id}
                        bookmarks={recipe.bookmarks}
                        categories={recipe.categories}
                        description={recipe.description}
                        id={index.toString()}
                        image={recipe.image}
                        likes={recipe.likes}
                        recommendedBy={recipe.recommendedBy}
                        title={recipe.title}
                    >
                        <AddRecipeToFavoritesButton variant='secondary' />
                        <CookRecipeButton id={recipe.id} url={recipe.url} />
                    </RecipeGalleryCard>
                ))}
            </Grid>
        );
    else return null;
});
