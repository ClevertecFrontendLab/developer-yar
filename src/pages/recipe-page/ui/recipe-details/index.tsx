import { Flex, Grid, Image, Stack, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { Category } from '~/entities/navigation';
import { RecipeStats } from '~/entities/recipe';
import { RecipeCategories } from '~/entities/recipe';
import { RecipeBookmarkButton } from '~/features/recipe-bookmark';
import { RecipeDelete } from '~/features/recipe-delete';
import { RecipeEditButton } from '~/features/recipe-edit';
import { RecipeLikeButton } from '~/features/recipe-like';
import { formatPlural, getCurrentUserId } from '~/shared/lib';
import { AlarmIcon } from '~/shared/ui/icons';
import { PageTitle } from '~/shared/ui/page-title';
import { Tag } from '~/shared/ui/tag';

import { recipeDetailsStyles as styles } from './index.styles';

type RecipeDetailsProps = {
    authorId: string;
    bookmarks: number;
    categories: Category[];
    description: string;
    id: string;
    image: string;
    likes: number;
    time: number;
    title: string;
};

export const RecipeDetails: FC<RecipeDetailsProps> = memo(
    ({ id, bookmarks, categories, description, image, likes, time, title, authorId }) => {
        const currentUserId = getCurrentUserId();

        const isCurrentUserAuthor = authorId === currentUserId;

        const formattedTime = formatPlural(time, ['минута', 'минуты', 'минут']);

        return (
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
                            {formattedTime}
                        </Tag>

                        <Flex {...styles.actionButtons}>
                            {isCurrentUserAuthor ? (
                                <>
                                    <RecipeDelete recipeId={id} />
                                    <RecipeEditButton />
                                </>
                            ) : (
                                <>
                                    <RecipeLikeButton recipeId={id} />
                                    <RecipeBookmarkButton recipeId={id} variant='primary' />
                                </>
                            )}
                        </Flex>
                    </Flex>
                </Flex>
            </Grid>
        );
    },
);
