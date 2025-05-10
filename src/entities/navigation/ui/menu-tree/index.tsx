import { Accordion } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';

import { useCategoryList } from '../../hooks/use-category-list';
import { menuTreeStyles as styles } from './index.styles';
import { SubmenuTree } from './submenu-tree';

export const MenuTree: FC = memo(() => {
    const { data: menu, isSuccess: isMenuSuccess } = useCategoryList();

    if (isMenuSuccess && menu)
        return (
            <Accordion
                {...styles.accordionNavigation}
                data-test-id={DATA_TEST_ATTRIBUTES.NAVIGATION}
            >
                {menu.map((item) => (
                    <SubmenuTree
                        key={item.id}
                        icon={item.icon}
                        id={item.id}
                        submenu={item.submenu}
                        title={item.title}
                        url={item.url}
                    />
                ))}
            </Accordion>
        );
    return null;
});
