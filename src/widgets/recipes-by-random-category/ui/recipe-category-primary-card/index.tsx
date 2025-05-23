import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { Category } from '~/entities/navigation';
import { RecipeCategories, RecipeStats } from '~/entities/recipe';

import { recipeCategoryPrimaryCardStyles as styles } from './index.styles';

type RecipeCategoryPrimaryCardProps = {
    bookmarks: number;
    categories: Category[];
    description: string;
    likes: number;
    title: string;
};

export const RecipeCategoryPrimaryCard: FC<RecipeCategoryPrimaryCardProps> = memo(
    ({ bookmarks = 0, categories, description, likes = 0, title }) => (
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
                <Stack {...styles.categoryBadges}>
                    <RecipeCategories categories={categories} variant='yellow' />
                </Stack>
                <RecipeStats bookmarks={bookmarks} likes={likes} />
            </Flex>
        </Stack>
    ),
);
