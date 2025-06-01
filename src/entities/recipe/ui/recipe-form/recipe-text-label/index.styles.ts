import { TextProps } from '@chakra-ui/react';

type RecipeTextLabelStyleProps = {
    text: TextProps;
};

export const recipeTextLabelStyles: RecipeTextLabelStyleProps = {
    text: {
        color: 'black',
        display: 'inline',
        fontSize: 'md',
        fontWeight: 'semibold',
        lineHeight: '6',
    },
};
