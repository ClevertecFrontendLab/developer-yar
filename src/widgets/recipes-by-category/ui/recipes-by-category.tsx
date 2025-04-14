import { Grid, GridItem, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { RecipeCategoryPrimaryCard, RecipeCategorySecondaryCard } from '~/entities/recipe';
import { CookRecipeButton } from '~/features/cook-recipe';
import { CATEGORY_NAMES } from '~/shared/consts';
import { Category } from '~/shared/model';
import { SectionTitle } from '~/shared/ui/section-title';

import { mockRecipes } from '../consts/mock-recipes';
import { recipesByCategoryStyles as styles } from './recipes-by-category.styles';

interface RecipesByCategoryProps {
    category: Category;
}

const getDescription = (category: Category) => {
    switch (category) {
        case CATEGORY_NAMES.VEGAN_CUISINE:
            return 'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.';
        case CATEGORY_NAMES.DESSERTS_PASTRIES:
            return 'Без них невозможно представить себе ни современную, ни традиционную кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб — рецепты изделий из теста многообразны и невероятно популярны.';
        default:
            return '';
    }
};

export const RecipesByCategory: FC<RecipesByCategoryProps> = ({ category }) => (
    <Grid {...styles.gridContainer}>
        <GridItem {...styles.titleContainer}>
            <SectionTitle>{category}</SectionTitle>
        </GridItem>
        <GridItem {...styles.descriptionContainer}>
            <Text {...styles.description}>{getDescription(category)}</Text>
        </GridItem>
        <GridItem {...styles.recipesByCategoryContainer}>
            <Grid {...styles.recipesPrimaryCards}>
                {mockRecipes.slice(0, 2).map((recipe) => (
                    <GridItem key={recipe.id}>
                        <RecipeCategoryPrimaryCard {...recipe} />
                    </GridItem>
                ))}
                <GridItem>
                    <Grid {...styles.recipesSecondaryCards}>
                        {mockRecipes.slice(2, 5).map((recipe) => (
                            <RecipeCategorySecondaryCard
                                key={recipe.id}
                                title={recipe.title}
                                category={recipe.category}
                            >
                                <CookRecipeButton variant='green' />
                            </RecipeCategorySecondaryCard>
                        ))}
                    </Grid>
                </GridItem>
            </Grid>
        </GridItem>
    </Grid>
);
