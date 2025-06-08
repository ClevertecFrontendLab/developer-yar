import { BoxProps } from '@chakra-ui/react';

type BloggerCardHeaderStyleProps = {
    newRecipesCountContainer: BoxProps;
};

export const bloggerCardHeaderStyles: BloggerCardHeaderStyleProps = {
    newRecipesCountContainer: {
        pos: 'absolute',
        right: { base: 1, xl: 2 },
        top: { base: 1, xl: 2 },
    },
};
