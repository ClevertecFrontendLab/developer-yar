import { Flex, Stack } from '@chakra-ui/react';
import { FC, memo, ReactNode } from 'react';

import { ExcludeAllergens } from '~/features/exclude-allergens';
import { FilterRecipes } from '~/features/filter-recipes';
import { SearchRecipes } from '~/features/search-recipes';

import { pageHeroStyles as styles } from './page-hero.styles';

type PageHeroProps = {
    children: ReactNode | ReactNode[];
};

export const PageHero: FC<PageHeroProps> = memo(({ children }) => (
    <Stack {...styles.pageHeroContainer}>
        <Stack {...styles.textContainer}>{children}</Stack>
        <Stack {...styles.featuresWrapper}>
            <Flex {...styles.filterAndSearchWrapper}>
                <FilterRecipes />
                <SearchRecipes />
            </Flex>
            <ExcludeAllergens />
        </Stack>
    </Stack>
));
