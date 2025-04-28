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
        pb: { xl: 6 },
    },
};
