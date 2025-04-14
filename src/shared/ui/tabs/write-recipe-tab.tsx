import { EditIcon } from '@chakra-ui/icons';
import { FC } from 'react';

import { CommonTab } from './common-tab/common-tab';

export const WriteRecipeTab: FC = () => (
    <CommonTab text='Записать'>
        <EditIcon boxSize={6} />
    </CommonTab>
);
