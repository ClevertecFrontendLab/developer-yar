import { StackProps } from '@chakra-ui/react';

type TheJuiciestPageStyleProps = {
    container: StackProps;
    layout: StackProps;
};

const baseGap = 8;

export const theJuiciestPageStyles: TheJuiciestPageStyleProps = {
    container: {
        gap: { base: baseGap, xl: 0 },
    },
    layout: {
        gap: { base: baseGap, xl: 10 },
        justify: 'center',
    },
};
