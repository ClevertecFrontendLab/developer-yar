import { GridProps } from '@chakra-ui/react';

type MainStyleProps = {
    mainGrid: GridProps;
};

export const mainStyles: MainStyleProps = {
    mainGrid: {
        margin: 'auto',
        maxW: 'var(--chakra-sizes-maxPageWidth)',
        pb: { base: 'var(--chakra-sizes-footer)', xl: 0 },
        pt: { base: 'var(--chakra-sizes-headerBase)', xl: 'var(--chakra-sizes-headerXL)' },
        templateColumns: { base: '1fr', xl: '256px 1fr 208px' },
    },
};
