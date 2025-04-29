import { createIcon, IconProps } from '@chakra-ui/react';
import { FC } from 'react';

export const FollowIcon: FC<IconProps> = createIcon({
    displayName: 'Follow',
    path: (
        <>
            <path
                d='M.75 10.5S0 10.5 0 9.75s.75-3 4.5-3S9 9 9 9.75s-.75.75-.75.75H.75ZM4.5 6a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z'
                fill='#fff'
            />
            <path
                clipRule='evenodd'
                d='M10.125 3.75a.375.375 0 0 1 .375.375V5.25h1.125a.375.375 0 0 1 0 .75H10.5v1.125a.375.375 0 1 1-.75 0V6H8.625a.375.375 0 0 1 0-.75H9.75V4.125a.375.375 0 0 1 .375-.375Z'
                fill='#fff'
                fillRule='evenodd'
            />
        </>
    ),
    viewBox: '0 0 12 12',
});
