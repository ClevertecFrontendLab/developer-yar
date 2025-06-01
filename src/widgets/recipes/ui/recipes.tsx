import { Grid } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { RecipeGalleryCard } from '~/entities/recipe';
import { RecipeItem } from '~/entities/recipe/model/types';
import { RecipeBookmarkButton } from '~/features/recipe-bookmark';
import { RecipeCookingButton } from '~/features/recipe-cooking';

import { recipesStyles as styles } from './recipes.styles';

type RecipesProps = {
    recipes: RecipeItem[];
};

export const Recipes: FC<RecipesProps> = memo(({ recipes }) => (
    <Grid {...styles.container}>
        {recipes.map((recipe, index) => (
            <RecipeGalleryCard
                bookmarks={recipe.bookmarks}
                categories={recipe.categories}
                description={recipe.description}
                id={recipe.id}
                image={recipe.image}
                key={recipe.id}
                likes={recipe.likes}
                recommendedBy={recipe.recommendedBy}
                title={recipe.title}
            >
                <RecipeBookmarkButton recipeId={recipe.id} variant='secondary' />
                <RecipeCookingButton id={index.toString()} url={recipe.url} />
            </RecipeGalleryCard>
        ))}
    </Grid>
));
