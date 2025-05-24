import { FlexProps } from '@chakra-ui/react';

export type DropdownItemStyleProps = {
    dropdownItem: FlexProps;
};

export const dropdownItemStyles: DropdownItemStyleProps = {
    dropdownItem: {
        _even: {
            bgColor: 'white',
        },
        _odd: {
            bgColor: 'blackAlpha.100',
        },
        pos: 'relative',
        px: 4,
        py: 1.5,
    },
};
