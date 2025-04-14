import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { CategoryBadge } from '~/shared/ui/category-badge';
import { RecipeStats } from '~/shared/ui/recipe-stats';

import { Recipe } from '../../model/recipe';
import { recipeCategoryPrimaryCardStyles as styles } from './index.styles';

interface RecipeCategoryPrimaryCardProps extends Omit<Recipe, 'id' | 'image' | 'recommendedBy'> {}

export const RecipeCategoryPrimaryCard: FC<RecipeCategoryPrimaryCardProps> = ({
    title,
    description,
    category,
    bookmarks = 0,
    emojies = 0,
}) => (
    <Stack {...styles.card}>
        <Stack {...styles.text}>
            <Heading as='h3' noOfLines={1} {...styles.title}>
                {title}
            </Heading>
            <Text noOfLines={3} {...styles.description}>
                {description}
            </Text>
        </Stack>

        <Flex {...styles.meta}>
            <CategoryBadge text={category} bg='yellow' />
            <RecipeStats bookmarks={bookmarks} emojies={emojies} />
        </Flex>
    </Stack>
);
