import { createIcon, IconProps } from '@chakra-ui/react';
import { FC } from 'react';

export const CloseFilterIcon: FC<IconProps> = createIcon({
    displayName: 'CloseFilter',
    path: (
        <>
            <path
                d='M24 12a12 12 0 1 1-24 0 12 12 0 0 1 24 0ZM8.031 6.969a.751.751 0 1 0-1.062 1.062L10.939 12l-3.97 3.969a.75.75 0 1 0 1.062 1.062L12 13.061l3.969 3.97a.752.752 0 0 0 1.062-1.062L13.061 12l3.97-3.969a.753.753 0 0 0-.244-1.225.751.751 0 0 0-.818.163L12 10.939 8.031 6.97Z'
                fill='#000'
            />
        </>
    ),
    viewBox: '0 0 24 24',
});
