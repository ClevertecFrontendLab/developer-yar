import { Box, Flex } from '@chakra-ui/react';
import { FC, useMemo } from 'react';

import { useGetAllRecipesQuery } from '~/entities/recipe';
import { useRecipesWithoutAllergens } from '~/features/exclude-allergens';
import { useFilteredRecipes } from '~/features/filter-recipes';
import { useFoundRecipes } from '~/features/search-recipes';
import { PageTitle } from '~/shared/ui/page-title';
import { FoundRecipes } from '~/widgets/found-recipes';
import { NewRecipes } from '~/widgets/new-recipes';
import { PageHero } from '~/widgets/page-hero';
import { Recipes } from '~/widgets/recipes';
import { RecipesByCategory } from '~/widgets/recipes-by-category';

import { FoodBlog } from './food-blog';
import { homePageStyles as styles } from './home-page.styles';
import { TheJuiciest } from './the-juiciest';

const HomePage: FC = () => {
    const { data: recipes = [], isLoading, isError } = useGetAllRecipesQuery();
    const { recipes: recipesWithoutAllergens, isFilteringAllergens } =
        useRecipesWithoutAllergens(recipes);
    const { recipes: filteredRecipes, isFullFiltering } = useFilteredRecipes(recipes);
    const { recipes: foundRecipes, isSearching, searchQuery } = useFoundRecipes(recipes);

    const visibleRecipes = useMemo(() => {
        if (isFullFiltering) return filteredRecipes;
        if (isFilteringAllergens) return recipesWithoutAllergens;
        return recipes;
    }, [isFullFiltering, isFilteringAllergens, filteredRecipes, recipesWithoutAllergens, recipes]);

    if (isLoading) return <div>Загрузка...</div>;
    if (isError) return <div>Ошибка загрузки данных</div>;

    return (
        <>
            <Box {...styles.pageHeroBox}>
                <PageHero>
                    <PageTitle>Приятного аппетита!</PageTitle>
                </PageHero>
            </Box>

            <Flex {...styles.layout}>
                {isSearching ? (
                    <FoundRecipes recipes={foundRecipes} searchQuery={searchQuery} />
                ) : isFullFiltering || isFilteringAllergens ? (
                    <Recipes recipes={visibleRecipes} />
                ) : (
                    <>
                        <NewRecipes recipes={recipes} />
                        <TheJuiciest recipes={recipes} />
                        <FoodBlog />
                    </>
                )}
                <RecipesByCategory />
            </Flex>
        </>
    );
};

export default HomePage;
