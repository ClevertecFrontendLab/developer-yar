import { PopoverContentProps } from '@chakra-ui/react';

export type DropdownItemsStyleProps = {
    content: PopoverContentProps;
};

export const dropdownItemsStyles: DropdownItemsStyleProps = {
    content: {
        borderWidth: 0,
        boxShadow: 'none',
        maxH: '336px',
        overflowY: 'auto',
        w: 'auto',
        zIndex: 'dropdown',
    },
};
