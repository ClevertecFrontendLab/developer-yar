import { GridItemProps, GridProps, TextProps } from '@chakra-ui/react';

type PostCardStyleProps = {
    authorBlock: GridItemProps;
    container: GridProps;
    contentText: TextProps;
    textBlock: GridItemProps;
};

export const postCardStyles: PostCardStyleProps = {
    authorBlock: {
        justifySelf: 'start',
        pb: { base: 2, '2xl': 4 },
        pt: { base: 4, '2xl': 6 },
        px: { base: 4, '2xl': 6 },
    },
    container: {
        alignContent: 'start',
        bg: 'white',
        layerStyle: 'subtleOutline',
    },
    contentText: {
        color: 'black',
        fontSize: 'sm',
        fontWeight: 'normal',
        lineHeight: '5',
        minH: 16,
    },
    textBlock: {
        pb: { base: 4, '2xl': 5 },
        pt: { base: 2, '2xl': 3 },
        px: { base: 4, '2xl': 6 },
    },
};
