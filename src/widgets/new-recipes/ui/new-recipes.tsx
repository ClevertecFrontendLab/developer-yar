import 'swiper/css';

import { Box, Stack } from '@chakra-ui/react';
import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useRecipes } from '~/entities/recipe';
import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { getDisplayForBreakpoints } from '~/shared/lib';
import { useAppStatusSync } from '~/shared/model';
import { SectionTitle } from '~/shared/ui/section-title';

import { swiperConfig } from '../config/swiper.config';
import { Arrows } from './arrows';
import { newRecipesStyles as styles } from './new-recipes.styles';
import { RecipeSliderCard } from './recipe-slider-card';

const shownFromXlBreakpoint = getDisplayForBreakpoints({ from: 'xl' });

export const NewRecipes: FC = () => {
    const navigate = useNavigate();

    const handleClick = useCallback((link: string) => () => navigate(link), [navigate]);

    const {
        data: recipes,
        isLoading: isRecipesLoading,
        isError: isRecipesError,
        isSuccess: isRecipesSuccess,
    } = useRecipes({ limit: 10, sortBy: 'createdAt', sortOrder: 'DESC' });

    useAppStatusSync(isRecipesLoading, isRecipesError);

    if (isRecipesSuccess && recipes)
        return (
            <Stack {...styles.newRecipesContainer}>
                <SectionTitle>Новые рецепты</SectionTitle>
                <Box {...shownFromXlBreakpoint}>
                    <Arrows />
                </Box>
                <Box>
                    <Swiper {...swiperConfig} data-test-id={DATA_TEST_ATTRIBUTES.CAROUSEL}>
                        {recipes
                            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                            .map((recipe, index) => (
                                <SwiperSlide
                                    key={recipe.id}
                                    style={{ ...styles.swiperSlide }}
                                    onClick={handleClick(recipe.url)}
                                >
                                    <Box
                                        {...styles.recipeCardContainer}
                                        data-test-id={`${DATA_TEST_ATTRIBUTES.CAROUSEL_CARD}-${index}`}
                                    >
                                        <RecipeSliderCard
                                            bookmarks={recipe.bookmarks}
                                            categories={recipe.categories}
                                            description={recipe.description}
                                            image={recipe.image}
                                            likes={recipe.likes}
                                            title={recipe.title}
                                        />
                                    </Box>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </Box>
            </Stack>
        );
    else return null;
};
