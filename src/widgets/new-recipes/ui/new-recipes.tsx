import 'swiper/css';

import { Box, Stack } from '@chakra-ui/react';
import { FC, memo, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';

import { filterTopNewest, Recipe } from '~/entities/recipe';
import { getDisplayForBreakpoints } from '~/shared/lib';
import { SectionTitle } from '~/shared/ui/section-title';

import { swiperConfig } from '../config/swiper.config';
import { Arrows } from './arrows';
import { newRecipesStyles as styles } from './new-recipes.styles';
import { RecipeSliderCard } from './recipe-slider-card';

const shownFromXlBreakpoint = getDisplayForBreakpoints({ from: 'xl' });

type NewRecipesProps = {
    recipes: Recipe[];
};

export const NewRecipes: FC<NewRecipesProps> = memo(({ recipes }) => {
    const navigate = useNavigate();

    const handleClick = useCallback((link: string) => () => navigate(link), [navigate]);

    const newRecipes = useMemo(() => filterTopNewest(recipes), [recipes]);

    return (
        <Stack {...styles.newRecipesContainer}>
            <SectionTitle>Новые рецепты</SectionTitle>
            <Box {...shownFromXlBreakpoint}>
                <Arrows />
            </Box>
            <Box>
                <Swiper {...swiperConfig} data-test-id='carousel'>
                    {newRecipes.map((recipe, index) => {
                        const link = `${recipe.category[0]}/${recipe.subcategory[0]}/${recipe.id}`;
                        return (
                            <SwiperSlide
                                key={recipe.id}
                                style={{ ...styles.swiperSlide }}
                                onClick={handleClick(link)}
                            >
                                <Box
                                    {...styles.recipeCardContainer}
                                    data-test-id={`carousel-card-${index}`}
                                >
                                    <RecipeSliderCard {...recipe} />
                                </Box>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Box>
        </Stack>
    );
});
