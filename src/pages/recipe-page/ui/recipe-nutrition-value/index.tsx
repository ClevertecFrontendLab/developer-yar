import { Flex, Stack, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { RecipeNutritionValue as BaseRecipeNutritionValue } from '~/entities/recipe';

import { recipeNutritionValueStyles as styles } from './index.styles';
import { NutritionIndicatorItem } from './nutrition-indicator';

type RecipeNutritionValueProps = {
    recipeNutritionValue: BaseRecipeNutritionValue;
};

export const RecipeNutritionValue: FC<RecipeNutritionValueProps> = memo(
    ({ recipeNutritionValue }) => (
        <Stack {...styles.recipeNutritionValue}>
            <Text {...styles.descriptionText}>*Калорийность на 1 порцию</Text>
            <Flex {...styles.nutritionIndicators}>
                <NutritionIndicatorItem
                    indicator='Калорийность'
                    value={recipeNutritionValue.calories}
                />
                <NutritionIndicatorItem indicator='Белки' value={recipeNutritionValue.proteins} />
                <NutritionIndicatorItem indicator='Жиры' value={recipeNutritionValue.fats} />
                <NutritionIndicatorItem
                    indicator='Углеводы'
                    value={recipeNutritionValue.carbohydrates}
                />
            </Flex>
        </Stack>
    ),
);
