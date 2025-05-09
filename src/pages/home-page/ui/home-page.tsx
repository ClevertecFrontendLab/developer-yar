import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { useFoundRecipes } from '~/features/recipe-search/';
import { useAppStatusSync } from '~/shared/model';
import { PageTitle } from '~/shared/ui/page-title';
import { FoundRecipes } from '~/widgets/found-recipes';
import { NewRecipes } from '~/widgets/new-recipes';
import { PageHero } from '~/widgets/page-hero';
import { Recipes } from '~/widgets/recipes';
import { RecipesByRandomCategory } from '~/widgets/recipes-by-random-category';

import { FoodBlog } from './food-blog';
import { homePageStyles as styles } from './home-page.styles';
import { TheJuiciest } from './the-juiciest';

const HomePage: FC = () => {
    const { recipes, isRecipesLoading, isRecipesError, isRecipesSuccess, searchQuery, mode } =
        useFoundRecipes();

    useAppStatusSync(isRecipesLoading, isRecipesError);

    return (
        <>
            <Box {...styles.pageHeroBox}>
                <PageHero>
                    <PageTitle>Приятного аппетита!</PageTitle>
                </PageHero>
            </Box>
            {isRecipesSuccess && recipes ? (
                <Flex {...styles.layout}>
                    {mode === 'search' ? (
                        <FoundRecipes recipes={recipes} searchQuery={searchQuery} />
                    ) : mode === 'filter' ? (
                        <Recipes recipes={recipes} />
                    ) : (
                        <>
                            <NewRecipes />
                            <TheJuiciest />
                            <FoodBlog />
                        </>
                    )}
                    <RecipesByRandomCategory />
                </Flex>
            ) : null}
        </>
    );
};

export default HomePage;
