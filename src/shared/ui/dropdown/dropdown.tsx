import { Popover, PopoverProps } from '@chakra-ui/react';
import { FC } from 'react';

type DropdownProps = PopoverProps;

export const Dropdown: FC<DropdownProps> = ({ children, ...props }) => (
    <Popover {...props} matchWidth>
        {children}
    </Popover>
);
