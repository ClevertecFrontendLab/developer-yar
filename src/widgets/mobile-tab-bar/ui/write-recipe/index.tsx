import { EditIcon } from '@chakra-ui/icons';
import { FC } from 'react';
import { Link } from 'react-router';

import { ROUTES } from '~/shared/routes';

import { CommonTab } from '../common-tab';

export const WriteRecipeTab: FC = () => (
    <Link to={ROUTES.NEW_RECIPE}>
        <CommonTab text='Записать'>
            <EditIcon boxSize={6} />
        </CommonTab>
    </Link>
);
