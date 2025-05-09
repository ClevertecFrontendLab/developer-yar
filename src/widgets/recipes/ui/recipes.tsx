import { Grid } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { RecipeGalleryCard } from '~/entities/recipe';
import { RecipeItem } from '~/entities/recipe/model/types';
import { AddRecipeToFavoritesButton } from '~/features/add-recipe-to-favorites';
import { CookRecipeButton } from '~/features/cook-recipe';

import { recipesStyles as styles } from './recipes.styles';

type RecipesProps = {
    recipes: RecipeItem[];
};

export const Recipes: FC<RecipesProps> = memo(({ recipes }) => (
    <Grid {...styles.container}>
        {recipes.map((recipe, index) => (
            <RecipeGalleryCard
                key={recipe.id}
                bookmarks={recipe.bookmarks}
                categories={recipe.categories}
                description={recipe.description}
                id={recipe.id}
                image={recipe.image}
                likes={recipe.likes}
                recommendedBy={recipe.recommendedBy}
                title={recipe.title}
            >
                <AddRecipeToFavoritesButton variant='secondary' />
                <CookRecipeButton id={index.toString()} url={recipe.url} />
            </RecipeGalleryCard>
        ))}
    </Grid>
));
