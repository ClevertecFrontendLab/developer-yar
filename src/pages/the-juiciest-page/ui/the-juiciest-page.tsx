import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { PageTitle } from '~/shared/ui/page-title';
import { PageHero } from '~/widgets/page-hero';
import { RecipesByRandomCategory } from '~/widgets/recipes-by-random-category';

import { RecipesWithLoadMore } from './recipes-with-load-more';
import { theJuiciestPageStyles as styles } from './the-juiciest-page.styles';

const TheJuiciestPage: FC = () => (
    <>
        <Box {...styles.pageHeroBox}>
            <PageHero>
                <PageTitle>Самое сочное</PageTitle>
            </PageHero>
        </Box>

        <Flex {...styles.layout}>
            <RecipesWithLoadMore />
            <RecipesByRandomCategory />
        </Flex>
    </>
);

export default TheJuiciestPage;
