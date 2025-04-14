import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { mockCurrentUser } from '~/shared/consts';
import { HomePageTab } from '~/shared/ui/tabs';
import { ProfileTab } from '~/shared/ui/tabs';
import { SearchTab } from '~/shared/ui/tabs';
import { WriteRecipeTab } from '~/shared/ui/tabs';

import { mobileTabBarStyles as styles } from './mobile-tab-bar.styles';

export const MobileTabBar: FC = () => (
    <Flex {...styles.barContainer} data-test-id='footer'>
        <HomePageTab />
        <SearchTab />
        <WriteRecipeTab />
        <ProfileTab avatar={mockCurrentUser.avatar} fullName={mockCurrentUser.fullName} />
    </Flex>
);
