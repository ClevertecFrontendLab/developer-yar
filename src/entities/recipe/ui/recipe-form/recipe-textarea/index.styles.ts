import { TextareaProps } from '@chakra-ui/react';

type RecipeTextareaStyleProps = {
    textarea: TextareaProps;
};

export const recipeTextareaStyles: RecipeTextareaStyleProps = {
    textarea: {
        _placeholder: {
            color: 'blackAlpha.500',
        },
        borderColor: 'gray.200',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: 'blackAlpha.700',
        fontSize: 'sm',
        fontWeight: 'normal',
        lineHeight: '5',
        px: 3,

        py: 2,
    },
};
