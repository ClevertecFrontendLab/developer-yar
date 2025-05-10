import { CenterProps, HeadingProps, ImageProps, StackProps, TextProps } from '@chakra-ui/react';

type NotFoundPageStyleProps = {
    contentContainer: CenterProps;
    descriptionText: TextProps;
    image: ImageProps;
    outerContainer: CenterProps;
    textBlock: StackProps;
    titleText: HeadingProps;
};

export const notFoundPageStyles: NotFoundPageStyleProps = {
    contentContainer: {
        flexDirection: 'column',
        gap: 8,
    },
    descriptionText: {
        color: 'blackAlpha.700',
        fontSize: 'md',
        fontWeight: 'normal',
        lineHeight: '6',
        textAlign: 'center',
    },
    image: {
        boxSize: { base: '108px', xl: '206px' },
    },
    outerContainer: {
        minH: {
            base: 'calc(100vh - var(--chakra-sizes-headerBase) - var(--chakra-sizes-footer))',
            xl: 'calc(100vh - var(--chakra-sizes-headerXL))',
        },
        p: 8,
    },
    textBlock: {
        gap: 4,
        maxW: { base: 60, xl: '332px' },
    },
    titleText: {
        color: 'black',
        fontSize: '2xl',
        fontWeight: 'bold',
        lineHeight: '8',
        textAlign: 'center',
    },
};
