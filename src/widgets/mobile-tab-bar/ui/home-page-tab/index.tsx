import { FC } from 'react';

import { HomePageIcon } from '~/shared/ui/icons';

import { CommonTab } from '../common-tab';

export const HomePageTab: FC = () => (
    <CommonTab isActiveTab text='Главная'>
        <HomePageIcon boxSize={10} />
    </CommonTab>
);
