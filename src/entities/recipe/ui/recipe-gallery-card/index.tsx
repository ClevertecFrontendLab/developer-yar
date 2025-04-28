import { Avatar, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';
import { FC, PropsWithChildren, ReactNode } from 'react';

import { User } from '~/entities/user/@x/recipe';
import { getDisplayForBreakpoints } from '~/shared/lib';
import { CategoryTags } from '~/shared/ui/category-tags';

import { RecipeStats } from '../recipe-stats';
import { recipeGalleryCardStyles as styles } from './index.styles';

const shownRecommendationFromXlBreakpoint = getDisplayForBreakpoints({ from: 'xl' });
const shownTextFromXlBreakpoint = getDisplayForBreakpoints({
    display: '-webkit-box',
    from: 'xl',
});

type RecipeGalleryCardProps = {
    bookmarks: number;
    category: string[];
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
    category,
    bookmarks = 0,
    likes = 0,
    recommendedBy,
}) => {
    const headingLines = useBreakpointValue({ base: 2, xl: 1 });

    return (
        <Grid {...styles.card} data-test-id={`food-card-${id}`}>
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
                            <CategoryTags categories={category} variant='yellow' />
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
