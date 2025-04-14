import { Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { PageDescription } from '~/shared/ui/page-description';
import { PageTitle } from '~/shared/ui/page-title';
import { CategoryTabs } from '~/widgets/category-tabs';
import { PageHero } from '~/widgets/page-hero';
import { RecipesByCategory } from '~/widgets/recipes-by-category';

import { veganCuisinePageStyles as styles } from './vegan-cuisine-page.styles';

const VeganCuisinePage: FC = () => (
    <Stack {...styles.container}>
        <PageHero>
            <PageTitle>Веганская кухня</PageTitle>
            <PageDescription>
                Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                вегетарианскую диету и готовить вкусные вегетарианские блюда.
            </PageDescription>
        </PageHero>
        <Stack {...styles.layout}>
            <CategoryTabs />
            <RecipesByCategory category='Десерты, выпечка' />
        </Stack>
    </Stack>
);

export default VeganCuisinePage;
