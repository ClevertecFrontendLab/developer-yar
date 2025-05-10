import { BoxProps } from '@chakra-ui/react';

type ContentStyleProps = {
    contentArea: BoxProps;
};

export const contentStyles: ContentStyleProps = {
    contentArea: {
        maxW: 'var(--chakra-sizes-maxContentWith)',
        minW: 0,
        ml: { xl: 6 },
        mr: { xl: '72px' },
    },
};
