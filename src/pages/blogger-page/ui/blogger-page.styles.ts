import { BoxProps, StackProps } from '@chakra-ui/react';

type BloggerPageStyleProps = {
    container: BoxProps;
    layout: StackProps;
    topLayout: StackProps;
};

export const bloggerPageStyles: BloggerPageStyleProps = {
    container: {
        pb: 4,
    },
    layout: {
        layerStyle: 'pageLayout',
    },
    topLayout: {
        gap: { base: 2, xl: 6 },
    },
};
