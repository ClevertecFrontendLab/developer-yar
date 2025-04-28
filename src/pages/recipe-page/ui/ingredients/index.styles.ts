import { FlexProps, NumberInputProps, TableCellProps, TableHeadProps } from '@chakra-ui/react';

type IngredientStyleProps = {
    headerPortionsCell: TableCellProps;
    headerTitle: TableCellProps;
    portionsFlexContainer: FlexProps;
    portionsInput: NumberInputProps;
    tableThead: TableHeadProps;
};

export const ingredientsStyles: IngredientStyleProps = {
    headerPortionsCell: {
        color: 'lime.600',
        fontSize: 'xs',
        fontWeight: 'bold',
        h: '56px',
        letterSpacing: '0.05em',
        lineHeight: '4',
        px: 0,
        py: 0,
        textAlign: 'right',
    },
    headerTitle: {
        color: 'lime.600',
        fontSize: 'xs',
        fontWeight: 'bold',
        h: '56px',
        letterSpacing: '0.05em',
        lineHeight: '4',
        px: 6,
        py: 0,
        textAlign: 'left',
    },
    portionsFlexContainer: {
        align: 'center',
        gap: 4,
        justify: 'flex-end',
    },
    portionsInput: {
        color: 'black',
        fontSize: 'md',
        fontWeight: 'normal',
        lineHeight: '6',
        width: '90px',
    },
    tableThead: {
        w: 'full',
    },
};
