import { Grid } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { Recipe, RecipeGalleryCard } from '~/entities/recipe';
import { AddRecipeToFavoritesButton } from '~/features/add-recipe-to-favorites';
import { CookRecipeButton } from '~/features/cook-recipe';
import { buildUrl } from '~/shared/lib';

import { recipesStyles as styles } from './recipes.styles';

type RecipesProps = {
    recipes: Recipe[];
};

export const Recipes: FC<RecipesProps> = memo(({ recipes }) => (
    <Grid {...styles.container}>
        {recipes.map((recipe, index) => (
            <RecipeGalleryCard
                key={recipe.id}
                bookmarks={recipe.bookmarks}
                category={recipe.category}
                description={recipe.description}
                id={recipe.id}
                image={recipe.image}
                likes={recipe.likes}
                recommendedBy={recipe.recommendedBy}
                title={recipe.title}
            >
                <AddRecipeToFavoritesButton variant='secondary' />
                <CookRecipeButton
                    id={index.toString()}
                    url={buildUrl(recipe.category[0], recipe.subcategory[0], recipe.id)}
                />
            </RecipeGalleryCard>
        ))}
    </Grid>
));
