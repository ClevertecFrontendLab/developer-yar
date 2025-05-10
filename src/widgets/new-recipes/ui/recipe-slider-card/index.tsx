import { Flex, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { Category } from '~/entities/navigation';
import { RecipeStats } from '~/entities/recipe';
import { RecipeCategories } from '~/entities/recipe';
import { getDisplayForBreakpoints } from '~/shared/lib';

import { recipeSliderCardStyles as styles } from './index.styles';

const shownFromXlBreakpoint = getDisplayForBreakpoints({
    display: '-webkit-box',
    from: 'xl',
});

type RecipeSliderCardProps = {
    bookmarks: number;
    categories: Category[];
    description: string;
    image: string;
    likes: number;
    title: string;
};

export const RecipeSliderCard: FC<RecipeSliderCardProps> = memo(
    ({ title, description, image, categories, bookmarks = 0, likes = 0 }) => {
        const headingLines = useBreakpointValue({ base: 2, xl: 1 });

        return (
            <Flex {...styles.card}>
                <Image alt={title} src={image} {...styles.image} />
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
                        <Stack {...styles.badgeBox}>
                            <RecipeCategories categories={categories} variant='green' />
                        </Stack>
                        <RecipeStats bookmarks={bookmarks} likes={likes} />
                    </Flex>
                </Stack>
            </Flex>
        );
    },
);
