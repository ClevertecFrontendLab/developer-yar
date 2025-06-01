import { CenterProps, TextProps } from '@chakra-ui/react';

type NutritionIndicatorStyleProps = {
    indicatorText: TextProps;
    nutritionIndicator: CenterProps;
    unitText: TextProps;
    valueText: TextProps;
};

export const nutritionIndicatorStyles: NutritionIndicatorStyleProps = {
    indicatorText: {
        color: 'blackAlpha.600',
        flex: { base: '0 0 36%', md: '0 0 auto' },
        fontSize: 'sm',
        fontWeight: 'normal',
        lineHeight: { base: '8', md: '5' },
        textTransform: 'lowercase',
    },
    nutritionIndicator: {
        borderRadius: 'xl',
        flexDir: { base: 'row', md: 'column' },
        gap: { base: 0, md: 3 },
        layerStyle: 'subtleOutline',
        px: { base: 3, md: 4 },
        py: 4,
        w: 'full',
    },
    unitText: {
        color: 'blackAlpha.900',
        flex: { base: '1 0 auto', md: '0 0 auto' },
        fontSize: { base: 'xs', md: 'sm' },
        fontWeight: 'semibold',
        lineHeight: { base: '4', md: '5' },
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    valueText: {
        color: 'lime.800',
        flex: { base: '0 0 36%', md: '0 0 auto' },
        fontSize: { base: '2xl', md: '4xl' },
        fontWeight: 'medium',
        lineHeight: { base: '8', md: '10' },
        textAlign: { base: 'center', md: 'left' },
    },
};
