import {
    Flex,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Table,
    TableContainer,
    Tbody,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react';
import { FC, memo, useState } from 'react';

import { Ingredient } from '~/entities/recipe';

import { ingredientsStyles as styles } from './index.styles';
import { IngredientRow } from './ingredient-row';

type IngredientsProps = {
    ingredients: Ingredient[];
};

export const Ingredients: FC<IngredientsProps> = memo(({ ingredients }) => {
    const [portions, setPortions] = useState(1);

    const handlePortionChange = (_: string, valueAsNumber: number): void => {
        if (!isNaN(valueAsNumber) && valueAsNumber >= 1 && valueAsNumber !== portions) {
            setPortions(valueAsNumber);
        }
    };

    return (
        <TableContainer>
            <Table>
                <Thead {...styles.tableThead}>
                    <Tr>
                        <Th {...styles.headerTitle}>Ингредиенты</Th>
                        <Th {...styles.headerPortionsCell}>
                            <Flex {...styles.portionsFlexContainer}>
                                Порций
                                <NumberInput
                                    defaultValue={1}
                                    max={10}
                                    min={1}
                                    step={0.25}
                                    value={portions}
                                    onChange={handlePortionChange}
                                    {...styles.portionsInput}
                                >
                                    {' '}
                                    <NumberInputField />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper data-test-id='increment-stepper' />
                                        <NumberDecrementStepper data-test-id='decrement-stepper' />
                                    </NumberInputStepper>
                                </NumberInput>
                            </Flex>
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {ingredients.map((ingredient, index) => (
                        <IngredientRow
                            key={ingredient.title}
                            dataTestId={`ingredient-quantity-${index}`}
                            ingredient={ingredient}
                            portions={portions}
                            variant={index % 2 === 1 ? 'white' : 'gray'}
                        />
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
});
