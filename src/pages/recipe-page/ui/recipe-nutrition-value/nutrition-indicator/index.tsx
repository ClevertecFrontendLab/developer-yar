import { Center, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { nutritionIndicatorStyles as styles } from './index.styles';

type NutritionIndicator = 'Калорийность' | 'Белки' | 'Жиры' | 'Углеводы';

export type NutritionIndicatorProps = {
    indicator: NutritionIndicator;
    value: number;
};

export const NutritionIndicatorItem: FC<NutritionIndicatorProps> = memo(({ indicator, value }) => (
    <Center {...styles.nutritionIndicator}>
        <Text {...styles.indicatorText}>{indicator}</Text>
        <Text {...styles.valueText}>{value}</Text>
        <Text {...styles.unitText}>{indicator === 'Калорийность' ? 'Ккал' : 'Грамм'}</Text>
    </Center>
));
