import { Stack } from '@chakra-ui/react';
import { FC } from 'react';

import { PageTitle } from '~/shared/ui/page-title';
import { PageHero } from '~/widgets/page-hero';
import { RecipesByCategory } from '~/widgets/recipes-by-category';

import { FoodBlog } from './food-blog';
import { homePageStyles as styles } from './home-page.styles';
import { NewRecipes } from './new-recipes';
import { TheJuiciest } from './the-juiciest';

const HomePage: FC = () => (
    <Stack {...styles.container}>
        <PageHero>
            <PageTitle>Приятного аппетита!</PageTitle>
        </PageHero>
        <Stack {...styles.layout}>
            <NewRecipes />
            <TheJuiciest />
            <FoodBlog />
            <RecipesByCategory category='Веганская кухня' />
        </Stack>
    </Stack>
);

export default HomePage;
