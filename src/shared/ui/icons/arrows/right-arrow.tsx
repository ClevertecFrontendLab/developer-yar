import { createIcon, IconProps } from '@chakra-ui/react';
import { FC } from 'react';

export const RightArrowIcon: FC<IconProps> = createIcon({
    displayName: 'RightArrow',
    path: (
        <>
            <path
                clipRule='evenodd'
                d='M1.5 12a.75.75 0 0 1 .75-.75h17.69l-4.721-4.719a.751.751 0 0 1 1.062-1.062l6 6a.75.75 0 0 1 0 1.062l-6 6a.75.75 0 0 1-1.062-1.062l4.72-4.719H2.25A.75.75 0 0 1 1.5 12Z'
                fill='currentColor'
                fillRule='evenodd'
            />
        </>
    ),
    viewBox: '0 0 24 24',
});
