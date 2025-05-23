import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { DATA_TEST_ATTRIBUTES, mockCurrentUser } from '~/shared/consts';

import { HomePageTab } from './home-page-tab';
import { mobileTabBarStyles } from './mobile-tab-bar.styles';
import { ProfileTab } from './profile-tab';
import { SearchTab } from './search-tab';
import { WriteRecipeTab } from './write-recipe';

export const MobileTabBar: FC = () => (
    <Flex data-test-id={DATA_TEST_ATTRIBUTES.FOOTER} {...mobileTabBarStyles.barContainer}>
        <HomePageTab />
        <SearchTab />
        <WriteRecipeTab />
        <ProfileTab avatar={mockCurrentUser.avatar} fullName={mockCurrentUser.fullName} />
    </Flex>
);
