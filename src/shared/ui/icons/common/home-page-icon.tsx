import { createIcon, IconProps } from '@chakra-ui/react';
import { FC } from 'react';

export const HomePageIcon: FC<IconProps> = createIcon({
    displayName: 'BookmarkHeart',
    path: (
        <>
            <rect fill='#000' height='40' rx='20' width='40' />
            <path
                clipRule='evenodd'
                d='M14 25.5V19h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V19h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5Zm11-11V18l-2-2v-1.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5Z'
                fill='#FFFFD3'
                fillRule='evenodd'
            />
            <path
                clipRule='evenodd'
                d='M19.293 13.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L20 14.207l-6.646 6.647a.5.5 0 0 1-.708-.708l6.647-6.646Z'
                fill='#FFFFD3'
                fillRule='evenodd'
            />
        </>
    ),
    viewBox: '0 0 40 40',
});
