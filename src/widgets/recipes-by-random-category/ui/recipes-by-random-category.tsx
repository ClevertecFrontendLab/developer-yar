import { Grid, GridItem, Text } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';

import { Category, Subcategory, useCategoryList } from '~/entities/navigation';
import { useRecipesBySubcategoryId } from '~/entities/recipe';
import { RecipeCookingButton } from '~/features/recipe-cooking';
import { useApiStatusSync } from '~/shared/model';
import { SectionTitle } from '~/shared/ui/section-title';

import { RecipeCategoryPrimaryCard } from './recipe-category-primary-card';
import { RecipeCategorySecondaryCard } from './recipe-category-secondary-card';
import { recipesByCategoryStyles as styles } from './recipes-by-random-category.styles';

const getRandomNumber = (to: number) => Math.floor(Math.random() * to);

export const RecipesByRandomCategory: FC = () => {
    const {
        data: categories,
        isError: isCategoriesError,
        isLoading: isCategoriesLoading,
        isSuccess: isCategoriesSuccess,
    } = useCategoryList();
    const [randomCategory, setRandomCategory] = useState<Category | null>(null);
    const [randomSubcategory, setRandomSubcategory] = useState<Subcategory | null>(null);

    useEffect(() => {
        if (isCategoriesSuccess && categories.length > 0 && randomSubcategory === null) {
            const category = categories[getRandomNumber(categories.length)];
            const subcategories = category.submenu;
            const subcat = subcategories[getRandomNumber(subcategories.length)];
            setRandomCategory(category);
            setRandomSubcategory(subcat);
        }
    }, [categories, isCategoriesSuccess, randomSubcategory]);

    const {
        data: recipes,
        isError: isRecipesError,
        isLoading: isRecipesLoading,
        isSuccess: isRecipesSuccess,
    } = useRecipesBySubcategoryId(randomSubcategory?.id, {
        limit: 5,
    });

    const isLoading = isCategoriesLoading || isRecipesLoading;
    const isError = isCategoriesError || isRecipesError;

    useApiStatusSync(isLoading, isError);

    if (isCategoriesSuccess && isRecipesSuccess && randomCategory && recipes)
        return (
            <Grid {...styles.gridContainer}>
                <GridItem {...styles.titleContainer}>
                    <SectionTitle>{randomCategory.title}</SectionTitle>
                </GridItem>
                <GridItem {...styles.descriptionContainer}>
                    <Text {...styles.description}>{randomCategory.description}</Text>
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
                                        icon={recipe.categories[0].icon}
                                        key={recipe.id}
                                        title={recipe.title}
                                    >
                                        <RecipeCookingButton
                                            id={recipe.id}
                                            url={recipe.url}
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
    else return null;
};
