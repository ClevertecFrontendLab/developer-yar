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
        pb: { '2xl': 4, base: 2 },
        pt: { '2xl': 6, base: 4 },
        px: { '2xl': 6, base: 4 },
    },
    container: {
        alignContent: 'start',
        bg: 'white',
        layerStyle: 'subtleOutlineHover',
    },
    contentText: {
        color: 'black',
        fontSize: 'sm',
        fontWeight: 'normal',
        lineHeight: '5',
        minH: 16,
    },
    textBlock: {
        pb: { '2xl': 5, base: 4 },
        pt: { '2xl': 3, base: 2 },
        px: { '2xl': 6, base: 4 },
    },
};
