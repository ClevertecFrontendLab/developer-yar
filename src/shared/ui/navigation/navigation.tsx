import { Accordion } from '@chakra-ui/react';
import { FC } from 'react';

import { navigationMenu } from '~/shared/consts';
import { OuterNavigationMenu } from '~/shared/model';

import { navigationStyles as styles } from './navigation.styles';
import { NavigationOuterItem } from './navigation-outer-menu';

export const Navigation: FC = () => (
    <Accordion allowMultiple {...styles.accordionNavigation}>
        {navigationMenu.map((item: OuterNavigationMenu) => (
            <NavigationOuterItem key={item.id} {...item} />
        ))}
    </Accordion>
);
