import { Search2Icon } from '@chakra-ui/icons';
import { FC } from 'react';

import { CommonTab } from './common-tab/common-tab';

export const SearchTab: FC = () => (
    <CommonTab text='Поиск'>
        <Search2Icon boxSize={6} />
    </CommonTab>
);
