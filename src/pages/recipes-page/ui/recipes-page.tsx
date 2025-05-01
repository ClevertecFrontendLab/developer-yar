import { Flex } from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import { useParams } from 'react-router';

import { filterRecipesByCategoryAndSubcategory, useGetAllRecipesQuery } from '~/entities/recipe';
import { useRecipesWithoutAllergens } from '~/features/exclude-allergens';
import { useFilteredRecipes } from '~/features/filter-recipes';
import { useFoundRecipes } from '~/features/search-recipes';
import { PageDescription } from '~/shared/ui/page-description';
import { PageTitle } from '~/shared/ui/page-title';
import { CategoryTabs } from '~/widgets/category-tabs';
import { FoundRecipes } from '~/widgets/found-recipes';
import { PageHero } from '~/widgets/page-hero';
import { RecipesByCategory } from '~/widgets/recipes-by-category';

import { recipesPageStyles as styles } from './recipes-page.styles';

const RecipesPage: FC = () => {
    const { data: allRecipes = [], isLoading, isError } = useGetAllRecipesQuery();
    const { category, subcategory } = useParams<{ category: string; subcategory: string }>();

    const categoryFilteredRecipes = useMemo(() => {
        if (!category || !subcategory) return allRecipes;
        return filterRecipesByCategoryAndSubcategory(allRecipes, category, subcategory);
    }, [allRecipes, category, subcategory]);

    const { recipes: recipesWithoutAllergens, isFilteringAllergens } =
        useRecipesWithoutAllergens(categoryFilteredRecipes);
    const { recipes: filteredRecipes, isFullFiltering } =
        useFilteredRecipes(categoryFilteredRecipes);
    const {
        recipes: foundRecipes,
        isSearching,
        searchQuery,
    } = useFoundRecipes(categoryFilteredRecipes);

    const visibleRecipes = useMemo(() => {
        if (isFullFiltering) return filteredRecipes;
        if (isFilteringAllergens) return recipesWithoutAllergens;
        return categoryFilteredRecipes;
    }, [
        isFullFiltering,
        isFilteringAllergens,
        filteredRecipes,
        recipesWithoutAllergens,
        categoryFilteredRecipes,
    ]);

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (isError) {
        return <div>Ошибка загрузки данных</div>;
    }

    return (
        <>
            <PageHero>
                <PageTitle>Веганская кухня</PageTitle>
                <PageDescription>
                    Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                    вегетарианскую диету и готовить вкусные вегетарианские блюда.
                </PageDescription>
            </PageHero>

            <Flex {...styles.layout}>
                {isSearching ? (
                    <FoundRecipes recipes={foundRecipes} searchQuery={searchQuery} />
                ) : (
                    <CategoryTabs recipes={visibleRecipes} />
                )}
                <RecipesByCategory />
            </Flex>
        </>
    );
};

export default RecipesPage;
