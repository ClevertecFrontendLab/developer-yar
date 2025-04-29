import { Box, Grid, Text } from '@chakra-ui/react';
import { FC, memo, useMemo } from 'react';

import { Recipe, RecipeGalleryCard } from '~/entities/recipe';
import { AddRecipeToFavoritesButton } from '~/features/add-recipe-to-favorites';
import { CookRecipeButton } from '~/features/cook-recipe';
import { buildUrl } from '~/shared/lib';

import { foundRecipesStyles as styles } from './found-recipes.styles';

type RecipesProps = {
    recipes: Recipe[];
    searchQuery: string;
};

export const FoundRecipes: FC<RecipesProps> = memo(({ recipes, searchQuery }) => {
    const highlightedRecipes = useMemo(
        () =>
            recipes.map((recipe) => {
                const title = recipe.title;
                const lowerTitle = title.toLowerCase();
                const lowerQuery = searchQuery.toLowerCase();

                const matchIndex = lowerTitle.indexOf(lowerQuery);

                if (matchIndex === -1 || searchQuery === '') {
                    return {
                        ...recipe,
                        highlightedTitleParts: [title],
                    };
                }

                const beforeMatch = title.slice(0, matchIndex);
                const matchedText = title.slice(matchIndex, matchIndex + searchQuery.length);
                const afterMatch = title.slice(matchIndex + searchQuery.length);

                return {
                    ...recipe,
                    highlightedTitleParts: [beforeMatch, matchedText, afterMatch],
                };
            }),
        [recipes, searchQuery],
    );

    return (
        <Grid {...styles.container}>
            {highlightedRecipes.map((recipe, index) => (
                <RecipeGalleryCard
                    key={recipe.id}
                    bookmarks={recipe.bookmarks}
                    category={recipe.category}
                    description={recipe.description}
                    id={recipe.id}
                    image={recipe.image}
                    likes={recipe.likes}
                    recommendedBy={recipe.recommendedBy}
                    title={
                        <Text>
                            {recipe.highlightedTitleParts.length === 1 ? (
                                recipe.highlightedTitleParts[0]
                            ) : (
                                <>
                                    {recipe.highlightedTitleParts[0]}
                                    <Box as='span' {...styles.highlightedTitleColor}>
                                        {recipe.highlightedTitleParts[1]}
                                    </Box>
                                    {recipe.highlightedTitleParts[2]}
                                </>
                            )}
                        </Text>
                    }
                >
                    <AddRecipeToFavoritesButton variant='secondary' />
                    <CookRecipeButton
                        id={index.toString()}
                        url={buildUrl(recipe.category[0], recipe.subcategory[0], recipe.id)}
                    />
                </RecipeGalleryCard>
            ))}
        </Grid>
    );
});
