import { CheckboxProps, StackProps, TextProps } from '@chakra-ui/react';

export type FilterRecipeCheckboxStyleProps = {
    checkbox: CheckboxProps;
    labelText: TextProps;
    listContainer: StackProps;
};

export const filterRecipeCheckboxStyles: FilterRecipeCheckboxStyleProps = {
    checkbox: {
        size: 'md',
    },
    labelText: {
        color: 'black',
        fontSize: 'md',
        fontWeight: 'medium',
        lineHeight: '6',
    },
    listContainer: {
        gap: 3,
    },
};
