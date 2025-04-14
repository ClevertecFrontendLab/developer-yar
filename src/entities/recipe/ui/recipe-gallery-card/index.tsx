import { Avatar, Box, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { getDisplayForBreakpoints } from '~/shared/lib';
import { CategoryBadge } from '~/shared/ui/category-badge';
import { RecipeStats } from '~/shared/ui/recipe-stats';

import { Recipe } from '../../model/recipe';
import { recipeGalleryCardStyles as styles } from './index.styles';

const shownRecommendationFromXlBreakpoint = getDisplayForBreakpoints({ from: 'xl' });
const shownTextFromXlBreakpoint = getDisplayForBreakpoints({
    from: 'xl',
    display: '-webkit-box',
});

interface RecipeGalleryCardProps extends Recipe, PropsWithChildren {}

export const RecipeGalleryCard: FC<RecipeGalleryCardProps> = ({
    children,
    title,
    description,
    image,
    category,
    bookmarks = 0,
    emojies = 0,
    recommendedBy,
}) => {
    const headingLines = useBreakpointValue({ base: 2, xl: 1 });

    return (
        <Grid {...styles.card}>
            <GridItem {...styles.imageBox}>
                <Image src={image} alt={title} {...styles.image} />
                {recommendedBy && (
                    <Flex {...shownRecommendationFromXlBreakpoint} {...styles.recommendationBox}>
                        <Avatar
                            src={recommendedBy.avatar}
                            name={recommendedBy.fullName}
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
                        <Box {...styles.badgeBox}>
                            <CategoryBadge text={category} bg='yellow' />
                        </Box>
                        <RecipeStats bookmarks={bookmarks} emojies={emojies} />
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
