import { Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { CategoryTags } from '~/shared/ui/category-tags';

import { RecipeStats } from '../recipe-stats';
import { recipeCategoryPrimaryCardStyles as styles } from './index.styles';

type RecipeCategoryPrimaryCardProps = {
    bookmarks: number;
    category: string[];
    description: string;
    likes: number;
    title: string;
};

export const RecipeCategoryPrimaryCard: FC<RecipeCategoryPrimaryCardProps> = ({
    title,
    description,
    category,
    bookmarks = 0,
    likes = 0,
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
            <Stack {...styles.categoryBadges}>
                <CategoryTags categories={category} variant='yellow' />
            </Stack>
            <RecipeStats bookmarks={bookmarks} likes={likes} />
        </Flex>
    </Stack>
);
