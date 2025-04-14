import { Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { CATEGORY_NAMES } from '~/shared/consts';
import { PageTitle } from '~/shared/ui/page-title';
import { PageHero } from '~/widgets/page-hero';
import { Recipes } from '~/widgets/recipes';
import { RecipesByCategory } from '~/widgets/recipes-by-category';

import { mockTheJuiciest } from '../consts/mock-the-juiciest';
import { theJuiciestPageStyles as styles } from './the-juiciest-page.styles';

const TheJuiciestPage: FC = () => (
    <Stack {...styles.container}>
        <PageHero>
            <PageTitle>Самое сочное</PageTitle>
        </PageHero>
        <Stack {...styles.layout}>
            <Recipes recipes={mockTheJuiciest} />
            <RecipesByCategory category={CATEGORY_NAMES.VEGAN_CUISINE} />
        </Stack>
    </Stack>
);

export default TheJuiciestPage;
