import { Avatar, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';
import { FC, PropsWithChildren, ReactNode } from 'react';

import { Category } from '~/entities/navigation/@x/recipe';
import { User } from '~/entities/user/@x/recipe';
import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { getDisplayForBreakpoints } from '~/shared/lib';

import { RecipeCategories } from '../recipe-categories';
import { RecipeStats } from '../recipe-stats';
import { recipeGalleryCardStyles as styles } from './index.styles';

const shownRecommendationFromXlBreakpoint = getDisplayForBreakpoints({ from: 'xl' });
const shownTextFromXlBreakpoint = getDisplayForBreakpoints({
    display: '-webkit-box',
    from: 'xl',
});

type RecipeGalleryCardProps = {
    bookmarks: number;
    categories: Category[];
    description: string;
    id: string;
    image: string;
    likes: number;
    recommendedBy?: User;
    title: string | ReactNode;
} & PropsWithChildren;

export const RecipeGalleryCard: FC<RecipeGalleryCardProps> = ({
    children,
    id,
    title,
    description,
    image,
    categories,
    bookmarks = 0,
    likes = 0,
    recommendedBy,
}) => {
    const headingLines = useBreakpointValue({ base: 2, xl: 1 });

    return (
        <Grid {...styles.card} data-test-id={`${DATA_TEST_ATTRIBUTES.FOOD_CARD}-${id}`}>
            <GridItem {...styles.imageBox}>
                <Image alt='Карточка рецепта' src={image} {...styles.image} />
                {recommendedBy && (
                    <Flex {...shownRecommendationFromXlBreakpoint} {...styles.recommendationBox}>
                        <Avatar
                            name={recommendedBy.fullName}
                            src={recommendedBy.avatar}
                            {...styles.recommendationAvatar}
                        />
                        <Text {...styles.recommendationText}>
                            {recommendedBy.fullName} рекомендует
                        </Text>
                    </Flex>
                )}
            </GridItem>

            <GridItem {...styles.contentBox}>
                <Stack {...styles.content}>
                    <Flex {...styles.metadata}>
                        <Grid {...styles.badgeBox}>
                            <RecipeCategories categories={categories} variant='yellow' />
                        </Grid>
                        <RecipeStats bookmarks={bookmarks} likes={likes} />
                    </Flex>

                    <Stack {...styles.infoBox}>
                        <Heading as='h3' noOfLines={headingLines} {...styles.title}>
                            {title}
                        </Heading>
                        <Text noOfLines={3} {...shownTextFromXlBreakpoint} {...styles.description}>
                            {description}
                        </Text>
                    </Stack>

                    <Flex {...styles.buttons}>{children}</Flex>
                </Stack>
            </GridItem>
        </Grid>
    );
};
