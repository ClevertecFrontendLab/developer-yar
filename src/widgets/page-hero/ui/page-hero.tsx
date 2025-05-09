import { Stack, Text } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import { RecipeSearch, useSearchResultStatus } from '~/features/recipe-search';

import { pageHeroStyles as styles } from './page-hero.styles';

type PageHeroProps = {
    children: ReactNode | ReactNode[];
};

export const PageHero: FC<PageHeroProps> = ({ children }) => {
    const { status, isRecipeQueryActive } = useSearchResultStatus();

    return (
        <Stack {...styles.pageHeroContainer(isRecipeQueryActive)}>
            {status === 'error' ? (
                <Text {...styles.errorMessage}>
                    По вашему запросу ничего не найдено. Попробуйте другой запрос
                </Text>
            ) : (
                <Stack {...styles.textContainer}>{children}</Stack>
            )}
            <RecipeSearch />
        </Stack>
    );
};
