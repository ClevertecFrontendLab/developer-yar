import { createIcon, IconProps } from '@chakra-ui/react';
import { FC } from 'react';

export const LogoutIcon: FC<IconProps> = createIcon({
    displayName: 'Logout',
    viewBox: '0 0 12 12',
    path: (
        <>
            <path fill='#000' d='M8 6.5v-1H3.5V4L1 6l2.5 2V6.5H8Z' />
            <path
                fill='#000'
                d='M10 1.5H5.5c-.551 0-1 .448-1 1v2h1v-2H10v7H5.5v-2h-1v2c0 .552.449 1 1 1H10c.552 0 1-.448 1-1v-7c0-.552-.448-1-1-1Z'
            />
        </>
    ),
});
