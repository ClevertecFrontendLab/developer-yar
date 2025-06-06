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
import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';

import { ingredientsStyles as styles } from './index.styles';
import { IngredientRow } from './ingredient-row';

type IngredientsProps = {
    ingredients: Ingredient[];
    recipePortions: number;
};

export const Ingredients: FC<IngredientsProps> = memo(({ ingredients, recipePortions }) => {
    const [currentPortions, setCurrentPortions] = useState(recipePortions);

    const handlePortionChange = (_: string, valueAsNumber: number): void => {
        setCurrentPortions(valueAsNumber);
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
                                    max={10}
                                    min={1}
                                    value={currentPortions}
                                    onChange={handlePortionChange}
                                >
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
                            currentPortions={currentPortions}
                            data-test-id={`${DATA_TEST_ATTRIBUTES.INGREDIENT_QUANTITY}-${index}`}
                            ingredient={ingredient}
                            key={ingredient.title}
                            recipePortions={recipePortions}
                            variant={index % 2 === 1 ? 'white' : 'gray'}
                        />
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
});
