import { Td, Tr } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { Ingredient } from '~/entities/recipe';

import { ingredientRowStyles as styles } from './index.styles';
import { IngredientRowVariants } from './index.types';

type IngredientRowProps = {
    dataTestId: string;
    ingredient: Ingredient;
    portions: number;
    variant?: IngredientRowVariants;
};

export const IngredientRow: FC<IngredientRowProps> = memo(
    ({ ingredient, portions, variant = 'white', dataTestId }) => {
        const { title, count, measureUnit } = ingredient;

        return (
            <Tr {...styles.ingredientRow(variant)} data-test-id={dataTestId}>
                <Td {...styles.ingredientCellTitle}>{title}</Td>
                <Td {...styles.ingredientCellCount}>
                    {count !== 0 && `${count * portions}`} {measureUnit}
                </Td>
            </Tr>
        );
    },
);
