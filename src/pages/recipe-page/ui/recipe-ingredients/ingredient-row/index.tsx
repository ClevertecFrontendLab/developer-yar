import { TableRowProps, Td, Tr } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { Ingredient } from '~/entities/recipe';

import { ingredientRowStyles as styles } from './index.styles';
import { IngredientRowVariants } from './index.types';

type IngredientRowProps = {
    currentPortions: number;
    ingredient: Ingredient;
    recipePortions: number;
    variant?: IngredientRowVariants;
} & TableRowProps;

const numberFormatter = new Intl.NumberFormat('ru-RU', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
});

export const IngredientRow: FC<IngredientRowProps> = memo(
    ({ currentPortions, ingredient, recipePortions, variant = 'white', ...props }) => {
        const { count, measureUnit, title } = ingredient;

        const isValidNumber =
            Number.isFinite(count) &&
            Number.isFinite(recipePortions) &&
            recipePortions !== 0 &&
            count !== 0;

        const amount = isValidNumber
            ? numberFormatter.format((count / recipePortions) * currentPortions)
            : null;

        return (
            <Tr {...styles.ingredientRow(variant)} {...props}>
                <Td {...styles.ingredientCellTitle}>{title}</Td>
                <Td {...styles.ingredientCellCount}>
                    {amount} {measureUnit}
                </Td>
            </Tr>
        );
    },
);
