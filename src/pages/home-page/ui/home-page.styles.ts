import { BoxProps, StackProps } from '@chakra-ui/react';

type HomePageStyleProps = {
    layout: StackProps;
    pageHeroBox: BoxProps;
};

export const homePageStyles: HomePageStyleProps = {
    layout: {
        layerStyle: 'pageLayout',
    },
    pageHeroBox: {
        margin: 'auto',
        maxW: { '2xl': '898px', base: 'full', md: '480px', xl: '578px' },
        pb: { base: 4, xl: 6 },
        w: 'full',
    },
};
