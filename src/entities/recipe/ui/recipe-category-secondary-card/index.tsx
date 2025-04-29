import { Flex, Text } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { CategoryIcon } from '~/shared/ui/category-icon';

import { recipeCategorySecondaryCardStyles as styles } from './index.styles';

type RecipeCategorySecondaryCardProps = {
    category: string[];
    title: string;
} & PropsWithChildren;

export const RecipeCategorySecondaryCard: FC<RecipeCategorySecondaryCardProps> = ({
    title,
    category,
    children,
}) => (
    <Flex {...styles.container}>
        <Flex {...styles.info}>
            <CategoryIcon boxSize={6} category={category[0]} />
            <Text noOfLines={1} {...styles.title}>
                {title}
            </Text>
        </Flex>
        {children}
    </Flex>
);
