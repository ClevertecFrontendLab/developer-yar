import { Grid } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { RecipeGalleryCard, useRecipesBySubcategoryId } from '~/entities/recipe';
import { RecipeBookmarkButton } from '~/features/recipe-bookmark';
import { RecipeCookingButton } from '~/features/recipe-cooking';
import { useApiStatusSync } from '~/shared/model';

import { subcategoryPanelStyles as styles } from './index.styles';

type SubcategoryPanelProps = { subcategoryId: string };

export const SubcategoryPanel: FC<SubcategoryPanelProps> = memo(({ subcategoryId }) => {
    const {
        data: recipes,
        isError: isRecipesError,
        isLoading: isRecipesLoading,
        isSuccess: isRecipesSuccess,
    } = useRecipesBySubcategoryId(subcategoryId);

    useApiStatusSync(isRecipesLoading, { isError: isRecipesError });

    if (isRecipesSuccess && recipes)
        return (
            <Grid {...styles.gridTabContent}>
                {recipes.map((recipe, index) => (
                    <RecipeGalleryCard
                        bookmarks={recipe.bookmarks}
                        categories={recipe.categories}
                        description={recipe.description}
                        id={index.toString()}
                        image={recipe.image}
                        key={recipe.id}
                        likes={recipe.likes}
                        recommendedBy={recipe.recommendedBy}
                        title={recipe.title}
                    >
                        <RecipeBookmarkButton recipeId={recipe.id} variant='secondary' />
                        <RecipeCookingButton id={recipe.id} url={recipe.url} />
                    </RecipeGalleryCard>
                ))}
            </Grid>
        );
    else return null;
});
