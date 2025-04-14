import { StackProps } from '@chakra-ui/react';

type PageHeroStyleProps = {
    pageHeroContainer: StackProps;
    textContainer: StackProps;
};

export const pageHeroStyles: PageHeroStyleProps = {
    pageHeroContainer: {
        alignItems: 'center',
        gap: { base: 4, xl: 8 },
        py: { xl: 8 },
    },
    textContainer: { gap: { base: 4, xl: 3 }, maxW: { xl: '696px' }, textAlign: 'center' },
};
