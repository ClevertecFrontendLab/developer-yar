import { Stack, TabPanels, Tabs } from '@chakra-ui/react';
import { FC, memo, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router';

import { Subcategory } from '~/entities/navigation';
import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';
import { LoadMoreButton } from '~/shared/ui/load-more-button';
import { Tab, TabList, TabPanel } from '~/shared/ui/tabs';

import { categoryTabsStyles as styles } from './category-tabs.styles';
import { SubcategoryPanel } from './subcategory-panel';

type CategoryTabsProps = {
    subcategories: Subcategory[];
};

export const CategoryTabs: FC<CategoryTabsProps> = memo(({ subcategories }) => {
    const { subcategory: activeSlug } = useParams();
    const navigate = useNavigate();

    const activeTabIndex = useMemo(
        () => subcategories.findIndex((subcategory) => subcategory.slug === activeSlug) ?? 0,
        [activeSlug, subcategories],
    );

    const handleTabChange = (index: number) => {
        navigate(`/${subcategories[index].url}`);
    };

    return (
        <Stack {...styles.stackContainer}>
            <Tabs index={activeTabIndex} isLazy onChange={handleTabChange}>
                <TabList {...styles.tabList}>
                    {subcategories.map((subcategory, index) => {
                        const baseTestId = `${DATA_TEST_ATTRIBUTES.TAB}-${subcategory.slug}-${index}`;

                        return (
                            <Tab data-test-id={baseTestId} key={subcategory.id} variant='recipe'>
                                {subcategory.title}
                                <span aria-selected='true' data-test-id='tab-meat-snacks-0' />
                                {index === activeTabIndex && index !== 0 && (
                                    <span data-test-id={`${subcategory.slug}-active`} />
                                )}
                            </Tab>
                        );
                    })}
                </TabList>

                <TabPanels>
                    {subcategories.map((subcategory) => (
                        <TabPanel key={subcategory.id}>
                            <SubcategoryPanel subcategoryId={subcategory.id} />
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>

            <LoadMoreButton />
        </Stack>
    );
});
