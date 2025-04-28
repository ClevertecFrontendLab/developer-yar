import { Accordion } from '@chakra-ui/react';
import { FC } from 'react';

import { useGetNavigationMenuQuery } from '../../model/api';
import { Menu } from '../../model/types';
import { menuTreeStyles as styles } from './index.styles';
import { SubmenuTree } from './submenu-tree';

export const MenuTree: FC = () => {
    const { data: menu, isSuccess } = useGetNavigationMenuQuery();

    return (
        <Accordion {...styles.accordionNavigation} data-test-id='nav'>
            {isSuccess && menu.map((item: Menu) => <SubmenuTree key={item.id} {...item} />)}
        </Accordion>
    );
};
