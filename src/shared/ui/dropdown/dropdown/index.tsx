import { Popover } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

export const Dropdown: FC<PropsWithChildren> = ({ children, ...props }) => (
    <Popover {...props} matchWidth>
        {children}
    </Popover>
);
