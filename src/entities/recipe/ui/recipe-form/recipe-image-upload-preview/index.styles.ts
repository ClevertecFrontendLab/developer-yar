import { CenterProps, IconProps, ImageProps } from '@chakra-ui/react';

type RecipeImageUploadPreviewStyleProps = {
    container: CenterProps;
    icon: IconProps;
    image: ImageProps;
};

export const recipeImageUploadPreviewStyles: RecipeImageUploadPreviewStyleProps = {
    container: {
        bgColor: 'blackAlpha.200',
        borderRadius: 'lg',
        cursor: 'pointer',
    },

    icon: {
        boxSize: 8,
    },

    image: {
        borderRadius: 'lg',
        boxSize: 'full',
        objectFit: 'cover',
    },
};
