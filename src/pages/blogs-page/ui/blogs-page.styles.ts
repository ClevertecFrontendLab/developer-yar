import { BoxProps, StackProps } from '@chakra-ui/react';

type BlogsPageStyleProps = {
    bottomLayout: StackProps;
    layout: StackProps;
    pageTitleContainer: BoxProps;
};

export const blogsPageStyles: BlogsPageStyleProps = {
    bottomLayout: {
        gap: { base: 3, md: 8, xl: 10 },
    },
    layout: {
        layerStyle: 'pageLayout',
    },
    pageTitleContainer: { pb: 6, pt: { base: 4, xl: 8 }, textAlign: 'center' },
};
