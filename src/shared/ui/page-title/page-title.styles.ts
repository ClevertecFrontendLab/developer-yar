import { HeadingProps } from '@chakra-ui/react';

type PageTitleStyleProps = {
    titleText: HeadingProps;
};

export const pageTitleStyles: PageTitleStyleProps = {
    titleText: {
        color: 'black',
        fontSize: { base: '2xl', lg: '3xl', xl: '5xl' },
        fontWeight: 'bold',
        lineHeight: { base: '8', xl: 'none' },
    },
};
