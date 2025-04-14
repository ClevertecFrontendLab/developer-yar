import { Button, Grid, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { FC } from 'react';

import { RecipeGalleryCard } from '~/entities/recipe';
import { AddRecipeToFavoritesButton } from '~/features/add-recipe-to-favorites';
import { CookRecipeButton } from '~/features/cook-recipe';
import { CATEGORY_NAMES } from '~/shared/consts';
import { Category } from '~/shared/model';

import { mockRecipes } from '../consts/mock-recipes';
import { categoryTabsStyles as styles } from './category-tabs.styles';

export const CategoryTabs: FC = () => {
    const categories: Category[] = Object.values(CATEGORY_NAMES);

    return (
        <Stack {...styles.stackContainer}>
            <Tabs isLazy>
                <TabList {...styles.tabList}>
                    {categories.map((category) => (
                        <Tab key={category} {...styles.tab}>
                            {category}
                        </Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {categories.map((category) => (
                        <TabPanel key={category} {...styles.tabPanel}>
                            <Grid {...styles.gridTabContent}>
                                {mockRecipes.map((recipe) => (
                                    <RecipeGalleryCard key={recipe.id} {...recipe}>
                                        <AddRecipeToFavoritesButton />
                                        <CookRecipeButton />
                                    </RecipeGalleryCard>
                                ))}
                            </Grid>
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
            <Button {...styles.buttonLoadMore}>Загрузить ещё</Button>
        </Stack>
    );
};
