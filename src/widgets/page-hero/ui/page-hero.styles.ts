import { StackProps, TextProps } from '@chakra-ui/react';

type PageHeroStyleProps = {
    errorMessage: TextProps;
    pageHeroContainer(isRecipeQueryActive: boolean): StackProps;
    textContainer: StackProps;
};

const shadowStyles: StackProps = {
    borderRadius: { '2xl': '3xl', base: 'lg' },
    boxShadow: '0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    margin: 'auto',
};

export const pageHeroStyles: PageHeroStyleProps = {
    errorMessage: {
        color: 'black',
        fontSize: { base: 'xs', xl: 'md' },
        fontWeight: 'semibold',
        lineHeight: { base: '4', xl: '6' },
        maxW: 80,
        textAlign: 'center',
    },
    pageHeroContainer: (isRecipeQueryActive: boolean): StackProps => ({
        alignItems: 'center',
        gap: { base: 4, xl: 8 },
        p: { base: 4, xl: 8 },
        sx: {
            '&:focus-within': shadowStyles,
            ...(isRecipeQueryActive ? shadowStyles : {}),
        },
    }),
    textContainer: { gap: { base: 4, xl: 3 }, maxW: { xl: '696px' }, textAlign: 'center' },
};
