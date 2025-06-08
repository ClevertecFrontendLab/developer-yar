import { FC } from 'react';
import { Link } from 'react-router';

import { ROUTES } from '~/shared/routes';
import { HomePageIcon } from '~/shared/ui/icons';

import { CommonTab } from '../common-tab';

export const HomePageTab: FC = () => (
    <Link to={ROUTES.HOME}>
        <CommonTab isActiveTab text='Главная'>
            <HomePageIcon boxSize={10} />
        </CommonTab>
    </Link>
);
