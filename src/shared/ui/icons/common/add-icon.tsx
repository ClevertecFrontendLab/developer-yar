import { createIcon, IconProps } from '@chakra-ui/react';
import { FC } from 'react';

export const AddIcon: FC<IconProps> = createIcon({
    displayName: 'Add',
    path: (
        <>
            <path
                d='M12 6A6 6 0 1 1 0 6a6 6 0 0 1 12 0ZM6.375 3.375a.375.375 0 1 0-.75 0v2.25h-2.25a.375.375 0 1 0 0 .75h2.25v2.25a.375.375 0 0 0 .75 0v-2.25h2.25a.375.375 0 0 0 0-.75h-2.25v-2.25Z'
                fill='#2DB100'
            />
        </>
    ),
    viewBox: '0 0 12 12',
});
