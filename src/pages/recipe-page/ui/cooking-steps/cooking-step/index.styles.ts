import { GridProps, ImageProps, StackProps, TextProps } from '@chakra-ui/react';

type CookingStepStyleProps = {
    content: StackProps;
    cookingStep: (hasImage: boolean) => GridProps;
    description: TextProps;
    image: ImageProps;
};

export const cookingStepStyles: CookingStepStyleProps = {
    content: {
        alignItems: 'flex-start',
        gap: { base: 3, xl: 4 },
        layerStyle: 'subtleOutline',
        pt: { base: 2, xl: 5 },
        px: { base: 2, xl: 6 },
        py: { base: 1, xl: 5 },
    },
    cookingStep: (hasImage: boolean): GridProps => ({
        templateColumns: hasImage
            ? {
                  base: '0.48fr 0.52fr',
                  md: '0.26fr 0.74fr',
                  xl: '0.52fr 0.48fr',
              }
            : '1fr',
    }),
    description: {
        color: 'black',
        fontSize: 'md',
        fontWeight: 'normal',
        lineHeight: 5,
    },
    image: {
        borderLeftRadius: 'lg',
        boxSize: 'full',
        minH: { base: 32, xl: '244px' },
        objectFit: 'cover',
    },
};
