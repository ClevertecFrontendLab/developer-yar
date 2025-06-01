import { Popover, PopoverProps } from '@chakra-ui/react';
import { FC } from 'react';

export const Dropdown: FC<PopoverProps> = ({ children, ...props }) => (
    <Popover {...props} matchWidth>
        {children}
    </Popover>
);
