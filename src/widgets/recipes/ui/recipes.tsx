import { Grid } from '@chakra-ui/react';
import { FC } from 'react';

import { Recipe, RecipeGalleryCard } from '~/entities/recipe';
import { AddRecipeToFavoritesButton } from '~/features/add-recipe-to-favorites';
import { CookRecipeButton } from '~/features/cook-recipe';

import { recipesStyles as styles } from './recipes.styles';

interface RecipesProps {
    recipes: Recipe[];
}

export const Recipes: FC<RecipesProps> = ({ recipes }) => (
    <Grid {...styles.container}>
        {recipes.map((recipe: Recipe) => (
            <RecipeGalleryCard key={recipe.id} {...recipe}>
                <AddRecipeToFavoritesButton />
                <CookRecipeButton />
            </RecipeGalleryCard>
        ))}
    </Grid>
);
