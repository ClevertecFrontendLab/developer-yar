import { Td, Tr } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { Ingredient } from '~/entities/recipe';

import { ingredientRowStyles as styles } from './index.styles';
import { IngredientRowVariants } from './index.types';

type IngredientRowProps = {
    currentPortions: number;
    dataTestId: string;
    ingredient: Ingredient;
    recipePortions: number;
    variant?: IngredientRowVariants;
};

const numberFormatter = new Intl.NumberFormat('ru-RU', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
});

export const IngredientRow: FC<IngredientRowProps> = memo(
    ({ currentPortions, dataTestId, ingredient, recipePortions, variant = 'white' }) => {
        const { count, measureUnit, title } = ingredient;

        const amount = numberFormatter.format((count / recipePortions) * currentPortions);

        return (
            <Tr {...styles.ingredientRow(variant)} data-test-id={dataTestId}>
                <Td {...styles.ingredientCellTitle}>{title}</Td>
                <Td {...styles.ingredientCellCount}>{count !== 0 && `${amount} ${measureUnit}`}</Td>
            </Tr>
        );
    },
);
