import { Flex } from '@chakra-ui/react';
import { FC, useMemo } from 'react';

import { useGetAllRecipesQuery } from '~/entities/recipe';
import { useRecipesWithoutAllergens } from '~/features/exclude-allergens';
import { useFilteredRecipes } from '~/features/filter-recipes';
import { PageTitle } from '~/shared/ui/page-title';
import { PageHero } from '~/widgets/page-hero';
import { Recipes } from '~/widgets/recipes';
import { RecipesByCategory } from '~/widgets/recipes-by-category';

import { theJuiciestPageStyles as styles } from './the-juiciest-page.styles';

const TheJuiciestPage: FC = () => {
    const { data: recipes = [], isLoading, isError } = useGetAllRecipesQuery();
    const { recipes: recipesWithoutAllergens, isFilteringAllergens } =
        useRecipesWithoutAllergens(recipes);
    const { recipes: filteredRecipes, isFullFiltering } = useFilteredRecipes(recipes);

    const visibleRecipes = useMemo(() => {
        if (isFullFiltering) return filteredRecipes;
        if (isFilteringAllergens) return recipesWithoutAllergens;
        return recipes;
    }, [isFullFiltering, isFilteringAllergens, filteredRecipes, recipesWithoutAllergens, recipes]);

    if (isLoading) return <div>Загрузка...</div>;
    if (isError) return <div>Ошибка загрузки данных</div>;

    return (
        <>
            <PageHero>
                <PageTitle>Самое сочное</PageTitle>
            </PageHero>
            <Flex {...styles.layout}>
                <Recipes recipes={visibleRecipes} />
                <RecipesByCategory />
            </Flex>
        </>
    );
};

export default TheJuiciestPage;
