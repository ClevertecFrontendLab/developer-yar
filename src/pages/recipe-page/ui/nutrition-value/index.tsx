import { Flex, Stack, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { NutritionValue as _NutritionValue } from '~/entities/recipe';

import { nutritionValueStyles as styles } from './index.styles';
import { NutritionIndicatorItem } from './nutrition-indicator';

type NutritionValueProps = {
    nutritionValue: _NutritionValue;
};

export const NutritionValue: FC<NutritionValueProps> = memo(({ nutritionValue }) => (
    <Stack {...styles.nutritionValue}>
        <Text {...styles.descriptionText}>*Калорийность на 1 порцию</Text>
        <Flex {...styles.nutritionIndicators}>
            <NutritionIndicatorItem indicator='Калорийность' value={nutritionValue.calories} />
            <NutritionIndicatorItem indicator='Белки' value={nutritionValue.proteins} />
            <NutritionIndicatorItem indicator='Жиры' value={nutritionValue.fats} />
            <NutritionIndicatorItem indicator='Углеводы' value={nutritionValue.carbohydrates} />
        </Flex>
    </Stack>
));
