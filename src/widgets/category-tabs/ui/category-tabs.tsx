import { Button, Grid, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { FC, memo, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router';

import { useGetNavigationSubmenuQuery } from '~/entities/navigation';
import {
    filterRecipesByCategoryAndSubcategory,
    Recipe,
    RecipeGalleryCard,
} from '~/entities/recipe';
import { AddRecipeToFavoritesButton } from '~/features/add-recipe-to-favorites';
import { CookRecipeButton } from '~/features/cook-recipe';
import { buildUrl, getUrlSegments } from '~/shared/lib';

import { categoryTabsStyles as styles } from './category-tabs.styles';

type ICategoryTabsProps = {
    recipes: Recipe[];
};

export const CategoryTabs: FC<ICategoryTabsProps> = memo(({ recipes }) => {
    const navigate = useNavigate();
    const { category, subcategory } = useParams();
    const { data: subcategories = [], isSuccess } = useGetNavigationSubmenuQuery(`/${category}`);
    const currentPath = `/${category}/${subcategory}`;

    const currentTabIndex = subcategories.findIndex(
        (subcategory) => subcategory.url === currentPath,
    );

    const handleTabChange = (index: number) => {
        const sel = subcategories[index];
        if (sel) navigate(sel.url);
    };

    const filteredRecipesBySubcategory = useMemo(
        () =>
            subcategories.map(({ url }) => {
                const [category, subcategory] = getUrlSegments(url);
                return filterRecipesByCategoryAndSubcategory(recipes, category, subcategory);
            }),
        [subcategories, recipes],
    );

    if (isSuccess) {
        return (
            <Stack {...styles.stackContainer}>
                <Tabs
                    isLazy
                    index={currentTabIndex >= 0 ? currentTabIndex : 0}
                    onChange={handleTabChange}
                >
                    <TabList {...styles.tabList}>
                        {subcategories.map(({ url, title }, index) => (
                            <Tab
                                key={url}
                                {...styles.tab}
                                data-test-id={`tab-${getUrlSegments(url)[1]}-${index}`}
                            >
                                {title}
                            </Tab>
                        ))}
                    </TabList>
                    <TabPanels>
                        {subcategories.map(({ url }, index) => {
                            const filteredRecipes = filteredRecipesBySubcategory[index];

                            return (
                                <TabPanel key={url} {...styles.tabPanel}>
                                    <Grid {...styles.gridTabContent}>
                                        {filteredRecipes.map((recipe, index) => (
                                            <RecipeGalleryCard
                                                key={recipe.id}
                                                bookmarks={recipe.bookmarks}
                                                category={recipe.category}
                                                description={recipe.description}
                                                id={index.toString()}
                                                image={recipe.image}
                                                likes={recipe.likes}
                                                recommendedBy={recipe.recommendedBy}
                                                title={recipe.title}
                                            >
                                                <AddRecipeToFavoritesButton variant='secondary' />
                                                <CookRecipeButton
                                                    id={recipe.id}
                                                    url={buildUrl(
                                                        recipe.category[0],
                                                        recipe.subcategory[0],
                                                        recipe.id,
                                                    )}
                                                />
                                            </RecipeGalleryCard>
                                        ))}
                                    </Grid>
                                </TabPanel>
                            );
                        })}
                    </TabPanels>
                </Tabs>
                <Button {...styles.buttonLoadMore}>Загрузить ещё</Button>
            </Stack>
        );
    }
});
