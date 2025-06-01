import { ButtonProps } from '@chakra-ui/react';

type DropdownToggleButtonStyleProps = {
    dropdownToggleButton: (isOpen: boolean) => ButtonProps;
};

export const dropdownToggleButtonStyles: DropdownToggleButtonStyleProps = {
    dropdownToggleButton: (isOpen: boolean): ButtonProps => ({
        _hover: {
            bgColor: 'white',
        },
        alignItems: 'center',
        bgColor: 'white',
        borderColor: isOpen ? 'lime.300' : 'blackAlpha.100',
        borderRadius: 'base',
        borderStyle: 'solid',
        borderWidth: '1px',
        gap: 2,
        h: 'auto',
        justifyContent: 'space-between',
        minW: 48,
        outline: 'none',
        px: 3,
        py: '7px',
        w: 'full',
    }),
};
