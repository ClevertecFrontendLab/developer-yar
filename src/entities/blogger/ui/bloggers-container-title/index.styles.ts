import { HeadingProps } from '@chakra-ui/react';

type BloggersConatinerTitleStyleProps = {
    title: HeadingProps;
};

export const bloggersConatinerTitleStyles: BloggersConatinerTitleStyleProps = {
    title: {
        color: 'black',
        fontSize: { '2xl': '4xl', base: '2xl', xl: '3xl' },
        fontWeight: { '2xl': 'normal', base: 'medium' },
        lineHeight: { '2xl': '10', base: '8', xl: '9' },
    },
};
