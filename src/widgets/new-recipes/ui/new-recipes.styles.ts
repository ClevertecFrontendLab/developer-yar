import { BoxProps, StackProps } from '@chakra-ui/react';

type NewRecipesStyleProps = {
    newRecipesContainer: StackProps;
    recipeCardContainer: BoxProps;
    swiperSlide: React.CSSProperties;
};

export const newRecipesStyles: NewRecipesStyleProps = {
    newRecipesContainer: {
        gap: 6,
        overflow: { '2xl': 'visible', xl: 'hidden' },
        pos: 'relative',
        zIndex: 'base',
    },
    recipeCardContainer: {
        h: 'full',
        pr: { '3xl': 6, base: 3 },
        w: { '2xl': '322px', base: '158px', xl: '279px' },
    },
    swiperSlide: {
        height: 'auto',
        width: 'auto',
    },
};
