import { Box, Grid, Text } from '@chakra-ui/react';
import { FC, memo, useMemo } from 'react';

import { RecipeGalleryCard } from '~/entities/recipe';
import { RecipeItem } from '~/entities/recipe/model/types';
import { RecipeBookmarkButton } from '~/features/recipe-bookmark';
import { RecipeCookingButton } from '~/features/recipe-cooking';

import { foundRecipesStyles as styles } from './found-recipes.styles';

type RecipesProps = {
    recipes: RecipeItem[];
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
                    bookmarks={recipe.bookmarks}
                    categories={recipe.categories}
                    description={recipe.description}
                    id={recipe.id}
                    image={recipe.image}
                    key={recipe.id}
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
                    <RecipeBookmarkButton recipeId={recipe.id} variant='secondary' />
                    <RecipeCookingButton id={index.toString()} url={recipe.url} />
                </RecipeGalleryCard>
            ))}
        </Grid>
    );
});
