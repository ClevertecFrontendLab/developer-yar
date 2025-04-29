import { createIcon, IconProps } from '@chakra-ui/react';
import { FC } from 'react';

export const FilterIcon: FC<IconProps> = createIcon({
    displayName: 'Filter',
    path: (
        <>
            <path
                d='M9 15.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 1 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-3-4.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 1 1 0 1.5H6.75a.75.75 0 0 1-.75-.75Zm-3-4.5A.75.75 0 0 1 3.75 6h16.5a.75.75 0 1 1 0 1.5H3.75A.75.75 0 0 1 3 6.75Z'
                fill='#000'
            />
        </>
    ),
    viewBox: '0 0 24 24',
});
