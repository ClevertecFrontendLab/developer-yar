import { Box, Flex, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import { FC } from 'react';

import { getDisplayForBreakpoints } from '~/shared/lib';
import { CategoryBadge } from '~/shared/ui/category-badge';
import { RecipeStats } from '~/shared/ui/recipe-stats';

import { Recipe } from '../../model/recipe';
import { recipeSliderCardStyles as styles } from './index.styles';

const shownFromXlBreakpoint = getDisplayForBreakpoints({
    from: 'xl',
    display: '-webkit-box',
});

interface RecipeSliderCardProps extends Recipe {}

export const RecipeSliderCard: FC<RecipeSliderCardProps> = ({
    title,
    description,
    image,
    category,
    bookmarks = 0,
    emojies = 0,
}) => {
    const headingLines = useBreakpointValue({ base: 2, xl: 1 });

    return (
        <Flex {...styles.card}>
            <Image src={image} alt={title} {...styles.image} />
            <Stack {...styles.content}>
                <Stack {...styles.infoBox}>
                    <Heading as='h3' noOfLines={headingLines} {...styles.title}>
                        {title}
                    </Heading>
                    <Text noOfLines={3} {...shownFromXlBreakpoint} {...styles.description}>
                        {description}
                    </Text>
                </Stack>
                <Flex {...styles.meta}>
                    <Box {...styles.badgeBox}>
                        <CategoryBadge text={category} bg='green' />
                    </Box>
                    <RecipeStats bookmarks={bookmarks} emojies={emojies} />
                </Flex>
            </Stack>
        </Flex>
    );
};
