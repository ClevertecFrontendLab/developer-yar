import { BoxProps, FlexProps, StackProps, TextProps } from '@chakra-ui/react';

type BaseBloggerCardStyleProps = {
    bloggerCardContainer: FlexProps;
    cardPostContainer: StackProps;
    postText: TextProps;
    profileCardContainer: BoxProps;
};

export const baseBloggerCardStyles: BaseBloggerCardStyleProps = {
    bloggerCardContainer: {
        bgColor: 'white',
        borderRadius: 'lg',
        direction: 'column',
        layerStyle: 'subtleOutline',
        pos: 'relative',
        px: { base: 4, xl: 6 },
    },
    cardPostContainer: {
        flex: 1,
        gap: 4,
        pb: { base: 4, xl: 5 },
        pt: { base: 2, xl: 3 },
    },
    postText: {
        color: 'black',
        fontSize: 'sm',
        fontWeight: 'light',
        lineHeight: '5',
    },
    profileCardContainer: {
        pb: { base: 2, xl: 4 },
        pt: 6,
    },
};
