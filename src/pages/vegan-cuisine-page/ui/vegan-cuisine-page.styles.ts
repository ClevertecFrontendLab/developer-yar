import { StackProps } from '@chakra-ui/react';

type VeganCuisinePageStyleProps = {
    container: StackProps;
    layout: StackProps;
};

const baseGap = 8;

export const veganCuisinePageStyles: VeganCuisinePageStyleProps = {
    container: {
        gap: { base: baseGap, xl: 0 },
    },
    layout: {
        gap: { base: baseGap, xl: 10 },
        justify: 'center',
    },
};
