import { FlexProps, StackProps } from '@chakra-ui/react';

type PageHeroStyleProps = {
    featuresWrapper: StackProps;
    filterAndSearchWrapper: FlexProps;
    pageHeroContainer: StackProps;
    textContainer: StackProps;
};

export const pageHeroStyles: PageHeroStyleProps = {
    featuresWrapper: {
        gap: 4,
        maxW: { base: '448px', xl: '518px' },
        w: 'full',
    },
    filterAndSearchWrapper: {
        gap: 3,
    },
    pageHeroContainer: {
        alignItems: 'center',
        gap: { base: 4, xl: 8 },
        p: { base: 4, xl: 8 },
        sx: {
            '&:focus-within': {
                borderRadius: { '2xl': '3xl', base: 'lg' },
                boxShadow:
                    '0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                margin: 'auto',
                maxW: { '2xl': '898px', base: 'full', md: '480px', xl: '578px' },
            },
        },
    },
    textContainer: { gap: { base: 4, xl: 3 }, maxW: { xl: '696px' }, textAlign: 'center' },
};
