import { Box, Flex } from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import { useParams } from 'react-router';

import { useCategoryList, useSubcategoriesByCategory } from '~/entities/navigation';
import { useFoundRecipes } from '~/features/recipe-search';
import { useAppStatusSync } from '~/shared/model';
import { PageDescription } from '~/shared/ui/page-description';
import { PageTitle } from '~/shared/ui/page-title';
import { CategoryTabs } from '~/widgets/category-tabs';
import { FoundRecipes } from '~/widgets/found-recipes';
import { PageHero } from '~/widgets/page-hero';
import { Recipes } from '~/widgets/recipes';
import { RecipesByRandomCategory } from '~/widgets/recipes-by-random-category';

import { recipesPageStyles as styles } from './recipes-page.styles';

const RecipesPage: FC = () => {
    const { category } = useParams();
    const {
        data: categories,
        isLoading: isCategoriesLoading,
        isError: isCategoriesError,
        isSuccess: isCategoriesSuccess,
    } = useCategoryList();

    const currentCategory = useMemo(
        () => categories.find(({ slug }) => slug === category),
        [categories, category],
    );

    const {
        data: subcategories,
        isLoading: isSubcategoriesLoading,
        isError: isSubcategoriesError,
        isSuccess: isSubcategoriesSuccess,
    } = useSubcategoriesByCategory(currentCategory?.id);

    const { recipes, isRecipesLoading, isRecipesError, isRecipesSuccess, searchQuery, mode } =
        useFoundRecipes();

    const isLoading = isCategoriesLoading || isSubcategoriesLoading || isRecipesLoading;
    const isError = isCategoriesError || isSubcategoriesError || isRecipesError;

    useAppStatusSync(isLoading, isError);

    if (
        isCategoriesSuccess &&
        isSubcategoriesSuccess &&
        isRecipesSuccess &&
        currentCategory &&
        subcategories
    )
        return (
            <>
                <Box {...styles.pageHeroBox}>
                    <PageHero>
                        <PageTitle>{currentCategory.title}</PageTitle>
                        <PageDescription>{currentCategory.description}</PageDescription>
                    </PageHero>
                </Box>

                <Flex {...styles.layout}>
                    {mode === 'search' ? (
                        <FoundRecipes recipes={recipes} searchQuery={searchQuery} />
                    ) : mode === 'filter' ? (
                        <Recipes recipes={recipes} />
                    ) : (
                        <CategoryTabs subcategories={subcategories} />
                    )}
                    <RecipesByRandomCategory />
                </Flex>
            </>
        );
    else return null;
};

export default RecipesPage;
