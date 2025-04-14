import { FC } from 'react';

import { HomePageIcon } from '../icons';
import { CommonTab } from './common-tab/common-tab';

export const HomePageTab: FC = () => (
    <CommonTab text='Главная' isActiveTab>
        <HomePageIcon boxSize={10} />
    </CommonTab>
);
