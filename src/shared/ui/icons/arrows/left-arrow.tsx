import { createIcon, IconProps } from '@chakra-ui/react';
import { FC } from 'react';

export const LeftArrowIcon: FC<IconProps> = createIcon({
    displayName: 'LeftArrow',
    path: (
        <>
            <path
                clipRule='evenodd'
                d='M22.5 12a.75.75 0 0 0-.75-.75H4.06l4.72-4.719A.75.75 0 0 0 7.72 5.469l-6 6a.75.75 0 0 0 0 1.062l6 6A.752.752 0 0 0 9 18a.751.751 0 0 0-.22-.531L4.06 12.75H21.75a.75.75 0 0 0 .75-.75Z'
                fill='currentColor'
                fillRule='evenodd'
            />
        </>
    ),
    viewBox: '0 0 24 24',
});
