import { Stack } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import { SearchRecipe } from '~/features/search-recipe';

import { pageHeroStyles as styles } from './page-hero.styles';

interface PageHeroProps {
    children: ReactNode | ReactNode[];
}

export const PageHero: FC<PageHeroProps> = ({ children }) => (
    <Stack {...styles.pageHeroContainer}>
        <Stack {...styles.textContainer}>{children}</Stack>
        <SearchRecipe />
    </Stack>
);
