import { Flex, Grid, Image, Stack, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { Category } from '~/entities/navigation';
import { RecipeStats } from '~/entities/recipe';
import { RecipeCategories } from '~/entities/recipe';
import { AddRecipeToFavoritesButton } from '~/features/add-recipe-to-favorites';
import { LikeRecipeButton } from '~/features/like-recipe';
import { AlarmIcon } from '~/shared/ui/icons';
import { PageTitle } from '~/shared/ui/page-title';
import { Tag } from '~/shared/ui/tag';

import { recipeDetailsStyles as styles } from './index.styles';

type RecipeDetailsProps = {
    bookmarks: number;
    categories: Category[];
    description: string;
    image: string;
    likes: number;
    time: number;
    title: string;
};

export const RecipeDetails: FC<RecipeDetailsProps> = memo(
    ({ bookmarks, categories, description, image, likes, time, title }) => (
        <Grid {...styles.wrapper}>
            <Image src={image} {...styles.image} />

            <Flex {...styles.recipeInfo}>
                <Flex {...styles.meta}>
                    <Flex {...styles.categories}>
                        <RecipeCategories categories={categories} variant='yellow' />
                    </Flex>
                    <RecipeStats bookmarks={bookmarks} likes={likes} />
                </Flex>

                <Stack {...styles.textBlock}>
                    <PageTitle>{title}</PageTitle>
                    <Text {...styles.description}>{description}</Text>
                </Stack>

                <Flex {...styles.bottomRow}>
                    <Tag icon={<AlarmIcon {...styles.alarmIcon} />} variant='gray'>
                        {time} минут
                    </Tag>
                    <Flex {...styles.actionButtons}>
                        <LikeRecipeButton />
                        <AddRecipeToFavoritesButton variant='primary' />
                    </Flex>
                </Flex>
            </Flex>
        </Grid>
    ),
);
