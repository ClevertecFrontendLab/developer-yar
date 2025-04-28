import { TableCellProps, TableRowProps } from '@chakra-ui/react';

import { IngredientRowVariants } from './index.types';

type IngredientRowStyleProps = {
    ingredientCellCount: TableCellProps;
    ingredientCellTitle: TableCellProps;
    ingredientRow: (variant: IngredientRowVariants) => TableRowProps;
};

const baseRowStyles: TableCellProps = {
    color: 'blackAlpha.900',
    fontSize: 'sm',
    lineHeight: '5',
    py: 0,
};

export const ingredientRowStyles: IngredientRowStyleProps = {
    ingredientCellCount: {
        ...baseRowStyles,
        fontWeight: 'normal',
        textAlign: 'right',
    },
    ingredientCellTitle: {
        ...baseRowStyles,
        color: 'blackAlpha.900',
        fontWeight: 'medium',
    },
    ingredientRow: (variant) => ({
        bgColor: variant === 'white' ? 'white' : 'blackAlpha.100',
        h: { base: 10, xl: '52px' },
    }),
};
