import {
    BadgeProps,
    FlexProps,
    GridProps,
    IconProps,
    ImageProps,
    StackProps,
    TextProps,
} from '@chakra-ui/react';

type RecipeDetailsStyleProps = {
    actionButtons: FlexProps;
    alarmIcon: IconProps;
    bottomRow: FlexProps;
    categories: FlexProps;
    description: TextProps;
    image: ImageProps;
    meta: FlexProps;
    recipeInfo: StackProps;
    textBlock: StackProps;
    timeBadge: BadgeProps;
    wrapper: GridProps;
};

export const recipeDetailsStyles: RecipeDetailsStyleProps = {
    actionButtons: { gap: 3, wrap: 'wrap' },
    alarmIcon: { boxSize: 4 },
    bottomRow: {
        alignItems: { base: 'flex-start', md: 'flex-end' },
        direction: { base: 'column', md: 'row' },
        gap: 3,
        justify: 'space-between',
        mt: 'auto',
        wrap: 'wrap',
    },
    categories: {
        flexFlow: { base: 'column nowrap', md: 'row wrap' },
        gap: { base: 2, xl: 4 },
    },
    description: {
        color: 'black',
        fontSize: 'sm',
        fontWeight: 'normal',
        lineHeight: '5',
    },
    image: {
        borderRadius: 'lg',
        boxSize: 'full',

        objectFit: 'cover',
    },
    meta: {
        align: 'flex-start',
        gap: 5,
        justify: 'space-between',
        mb: 8,
    },
    recipeInfo: {
        direction: 'column',
        justify: 'space-between',
    },
    textBlock: { gap: { base: 4, xl: 6 }, mb: { base: 6, xl: 8 } },
    timeBadge: {
        alignItems: 'center',
        borderRadius: 'sm',
        color: 'black',
        display: 'flex',
        fontSize: 'md',
        fontWeight: 'normal',
        gap: 2,
        h: 6,
        lineHeight: '5',
        px: 2,
        py: 0.5,
        textTransform: 'none',
    },
    wrapper: {
        gap: { base: 4, xl: 6 },
        templateColumns: {
            // xl: '0.4124fr 0.5876fr',
            '2xl': '0.4139fr 0.5861fr',

            base: '1fr',

            md: '0.3258fr 0.6742fr',

            xl: '0.5fr 0.5fr',
        },
        // minH: { md: '224px', xl: '410px' },
    },
};
