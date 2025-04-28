import {
    AvatarProps,
    FlexProps,
    GridItemProps,
    GridProps,
    HeadingProps,
    ImageProps,
    StackProps,
    TextProps,
} from '@chakra-ui/react';

type RecipeGalleryCardStyleProps = {
    badgeBox: GridProps;
    buttons: FlexProps;
    card: GridProps;
    content: StackProps;
    contentBox: GridItemProps;
    description: TextProps;
    image: ImageProps;
    imageBox: GridItemProps;
    infoBox: StackProps;
    metadata: FlexProps;
    recommendationAvatar: AvatarProps;
    recommendationBox: FlexProps;
    recommendationText: TextProps;
    title: HeadingProps;
};

export const recipeGalleryCardStyles: RecipeGalleryCardStyleProps = {
    badgeBox: {
        gap: 1,
        left: { base: 2, xl: 'auto' },
        pos: { base: 'absolute', xl: 'static' },
        top: { base: 2, xl: 'auto' },
    },
    buttons: {
        gap: { base: 3, xl: 2 },
        justify: 'right',
        mt: 'auto',
    },
    card: {
        alignContent: 'start',
        layerStyle: 'subtleOutlineHover',
        pos: 'relative',
        templateColumns: {
            '3xl': '346fr 322fr',
            base: '158fr 170fr',
            md: '158fr 198fr',
            xl: '346fr 534fr',
        },
        templateRows: '1fr',
    },
    content: {
        gap: { base: 0, xl: 6 },
        h: 'full',
        pb: { base: 1, xl: 5 },
        pt: { base: 2, xl: 5 },
        px: { base: 2, xl: 6 },
    },
    contentBox: {},
    description: {
        color: 'black',
        fontSize: 'sm',
        fontWeight: 'normal',
        lineHeight: '5',
    },
    image: {
        aspectRatio: { base: 79 / 64, xl: 173 / 122 },
        borderLeftRadius: 'lg',
        boxSize: 'full',
        objectFit: 'cover',
    },
    imageBox: {
        pos: 'relative',
    },
    infoBox: {
        gap: 2,
    },
    metadata: {
        align: 'flex-start',
        justify: 'space-between',
    },
    recommendationAvatar: {
        boxSize: 4,
    },
    recommendationBox: {
        alignItems: 'center',
        bgColor: 'lime.150',
        borderRadius: 'base',
        bottom: 5,
        gap: 2,
        left: 6,
        pos: 'absolute',
        px: 2,
        py: 1,
    },
    recommendationText: {
        color: 'black',
        fontSize: 'sm',
        fontWeight: 'normal',
        lineHeight: '5',
    },
    title: {
        color: 'black',
        fontSize: { base: 'md', xl: 'xl' },
        fontWeight: 'medium',
        lineHeight: { base: '6', xl: '7' },
    },
};
