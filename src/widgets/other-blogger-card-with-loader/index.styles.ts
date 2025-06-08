import { BoxProps } from '@chakra-ui/react';

type OtherBloggerCardWithLoaderStyleProps = {
    container: BoxProps;
    loader: BoxProps;
};

export const otherBloggerCardWithLoaderStyles: OtherBloggerCardWithLoaderStyleProps = {
    container: {
        pos: 'relative',
    },
    loader: {
        boxSize: 'full',
        pos: 'absolute',
    },
};
