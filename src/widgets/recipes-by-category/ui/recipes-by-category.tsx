import { Grid, GridItem, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

import {
    RecipeCategoryPrimaryCard,
    RecipeCategorySecondaryCard,
    useGetAllRecipesQuery,
} from '~/entities/recipe';
import { CookRecipeButton } from '~/features/cook-recipe';
import { buildUrl } from '~/shared/lib';
import { SectionTitle } from '~/shared/ui/section-title';

import { recipesByCategoryStyles as styles } from './recipes-by-category.styles';

export const RecipesByCategory: FC = memo(() => {
    const { data: recipes, isSuccess } = useGetAllRecipesQuery();

    if (isSuccess)
        return (
            <Grid {...styles.gridContainer}>
                <GridItem {...styles.titleContainer}>
                    <SectionTitle>Дессерты, выпечка</SectionTitle>
                </GridItem>
                <GridItem {...styles.descriptionContainer}>
                    <Text {...styles.description}>
                        Без них невозможно представить себе ни современную, ни традиционную
                        кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб —
                        рецепты изделий из теста многообразны и невероятно популярны.
                    </Text>
                </GridItem>
                <GridItem {...styles.recipesByCategoryContainer}>
                    <Grid {...styles.recipesPrimaryCards}>
                        {recipes.slice(0, 2).map((recipe) => (
                            <GridItem key={recipe.id}>
                                <RecipeCategoryPrimaryCard {...recipe} />
                            </GridItem>
                        ))}
                        <GridItem>
                            <Grid {...styles.recipesSecondaryCards}>
                                {recipes.slice(2, 5).map((recipe) => (
                                    <RecipeCategorySecondaryCard
                                        key={recipe.id}
                                        category={recipe.category}
                                        title={recipe.title}
                                    >
                                        <CookRecipeButton
                                            id={recipe.id}
                                            url={buildUrl(
                                                recipe.category[0],
                                                recipe.subcategory[0],
                                                recipe.id,
                                            )}
                                            variant='green'
                                        />
                                    </RecipeCategorySecondaryCard>
                                ))}
                            </Grid>
                        </GridItem>
                    </Grid>
                </GridItem>
            </Grid>
        );
});
