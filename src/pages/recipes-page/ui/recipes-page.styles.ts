import { BoxProps, StackProps } from '@chakra-ui/react';

type RecipesPageStyleProps = {
    layout: StackProps;
    pageHeroBox: BoxProps;
};

export const recipesPageStyles: RecipesPageStyleProps = {
    layout: {
        layerStyle: 'pageLayout',
    },
    pageHeroBox: {
        margin: 'auto',
        maxW: { '2xl': '898px', base: 'full', xl: '696px' },
        pb: { base: 4, xl: 0 },
        w: 'full',
    },
};
