import { createIcon, IconProps } from '@chakra-ui/react';
import { FC } from 'react';

export const LoginIcon: FC<IconProps> = createIcon({
    displayName: 'Login',
    path: (
        <>
            <path d='M7.583 9.333 10.5 6.999 7.583 4.666v1.75h-5.25v1.167h5.25v1.75Z' fill='#000' />
            <path
                d='M11.667 1.75h-5.25c-.644 0-1.167.523-1.167 1.167V5.25h1.167V2.917h5.25v8.166h-5.25V8.75H5.25v2.333c0 .644.523 1.167 1.167 1.167h5.25c.643 0 1.166-.523 1.166-1.167V2.917c0-.644-.523-1.167-1.166-1.167Z'
                fill='#000'
            />
        </>
    ),
    viewBox: '0 0 14 14',
});
