import { CenterProps, FlexProps, IconProps, TextProps } from '@chakra-ui/react';

type RecipeStatsStyleProps = {
    badgeContainer: CenterProps;
    badgeImage: IconProps;
    badgeLabel: TextProps;
    badges: FlexProps;
};

export const recipeStatsStyles: RecipeStatsStyleProps = {
    badgeContainer: {
        gap: 1.5,
        px: 1,
    },
    badgeImage: {
        boxSize: 3,
    },
    badgeLabel: {
        fontSize: 'xs',
        lineHeight: '4',
    },
    badges: {
        gap: 1,
    },
};
