import { Flex, Text } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { CategoryIcon } from '~/shared/ui/category-icon';

import { Recipe } from '../../model/recipe';
import { recipeCategorySecondaryCardStyles as styles } from './index.styles';

interface RecipeCategorySecondaryCardProps
    extends PropsWithChildren,
        Pick<Recipe, 'title' | 'category'> {}

export const RecipeCategorySecondaryCard: FC<RecipeCategorySecondaryCardProps> = ({
    title,
    category,
    children,
}) => (
    <Flex {...styles.container}>
        <Flex {...styles.info}>
            <CategoryIcon category={category} boxSize={6} />
            <Text noOfLines={1} {...styles.title}>
                {title}
            </Text>
        </Flex>
        {children}
    </Flex>
);
