import { createIcon, IconProps } from '@chakra-ui/react';
import { FC } from 'react';

export const WriteRecipeIcon: FC<IconProps> = createIcon({
    displayName: 'WriteRecipe',
    path: (
        <>
            <path
                d='M23.253 2.91a.75.75 0 0 1 0 1.059L21.69 5.535l-3-3L20.253.969a.75.75 0 0 1 1.06 0l1.94 1.94v.001Zm-2.625 3.684-3-3-10.22 10.221a.75.75 0 0 0-.18.294L6.02 17.73a.375.375 0 0 0 .474.474l3.62-1.207a.75.75 0 0 0 .295-.18l10.22-10.221v-.002Z'
                fill='#FFFFD3'
            />
            <path
                clipRule='evenodd'
                d='M1.5 20.25a2.25 2.25 0 0 0 2.25 2.25h16.5a2.25 2.25 0 0 0 2.25-2.25v-9a.75.75 0 1 0-1.5 0v9a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V3.75A.75.75 0 0 1 3.75 3h9.75a.75.75 0 1 0 0-1.5H3.75A2.25 2.25 0 0 0 1.5 3.75v16.5Z'
                fill='#FFFFD3'
                fillRule='evenodd'
            />
        </>
    ),
    viewBox: '0 0 24 24',
});
