import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { useGetAllBloggersQuery } from '~/entities/blogger';
import { useFoundRecipes } from '~/features/recipe-refinement';
import { getCurrentUserId } from '~/shared/lib';
import { useApiStatusSync } from '~/shared/model';
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
    const { isRecipesError, isRecipesLoading, isRecipesSuccess, mode, recipes, searchQuery } =
        useFoundRecipes();

    const currentUserId = getCurrentUserId();

    const {
        data: bloggers,
        isLoading: isBloggersloading,
        isError: isBloggersError,
        isSuccess: isBloggersSuccess,
    } = useGetAllBloggersQuery({
        currentUserId,
        limit: '',
    });

    const isLoading = isRecipesLoading || isBloggersloading;
    const isError = isRecipesError || isBloggersError;

    useApiStatusSync(isLoading, {
        isError: isError,
    });

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
                        isBloggersSuccess &&
                        bloggers && (
                            <>
                                <NewRecipes />
                                <TheJuiciest />
                                <FoodBlog bloggers={bloggers.others} />
                            </>
                        )
                    )}
                    <RecipesByRandomCategory />
                </Flex>
            ) : null}
        </>
    );
};

export default HomePage;
