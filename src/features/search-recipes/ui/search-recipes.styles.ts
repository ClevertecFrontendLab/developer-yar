import type { FlexProps, IconButtonProps, IconProps, InputProps } from '@chakra-ui/react';

type SearchRecipesStyleProps = {
    clearIcon: IconProps;
    clearIconWrapper: (isQueryNotLongEnough: boolean) => Omit<IconButtonProps, 'aria-label'>;
    iconWrapper: Omit<IconButtonProps, 'aria-label'>;
    input: (isQueryNotEmpty: boolean) => InputProps;
    inputButtons: FlexProps;
    inputWrapper: FlexProps;
    searchIcon: IconProps;
    searchIconWrapper: (isQueryNotLongEnough: boolean) => Omit<IconButtonProps, 'aria-label'>;
};

export const searchRecipesStyles: SearchRecipesStyleProps = {
    clearIcon: {
        boxSize: 6,
        color: 'blackAlpha.500',
    },
    clearIconWrapper: (isQueryNotEmpty: boolean): Omit<IconButtonProps, 'aria-label'> => ({
        display: isQueryNotEmpty ? 'none' : 'box',
    }),
    iconWrapper: {
        _hover: {
            bgColor: 'transparent',
        },
        bgColor: 'transparent',
        h: 'auto',
        minW: 'auto',
    },
    input: (isQueryNotEmpty: boolean): InputProps => ({
        _active: {
            borderWidth: '1px',
            boxShadow: 'none',
        },
        _focus: {
            borderWidth: '1px',
            boxShadow: 'none',
        },
        _hover: {
            borderWidth: '1px',
            boxShadow: 'none',
        },
        _placeholder: { color: 'lime.800' },
        borderColor: 'blackAlpha.600',
        borderRadius: 'md',
        borderStyle: 'solid',
        borderWidth: '1px',
        boxShadow: 'none',
        color: 'lime.800',
        focusBorderColor: 'blackAlpha.600',
        fontSize: { base: 'sm', xl: 'lg' },
        fontWeight: 'normal',
        h: { base: 8, xl: 12 },
        paddingInlineEnd: isQueryNotEmpty ? 8 : 16,
    }),
    inputButtons: {
        gap: 1,
        pointerEvents: 'auto',
        pos: 'absolute',
        right: 4,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 'docked',
    },
    inputWrapper: {
        grow: 1,
    },
    searchIcon: {
        color: 'black',
    },
    searchIconWrapper: (isQueryNotLongEnough: boolean): Omit<IconButtonProps, 'aria-label'> => ({
        pointerEvents: isQueryNotLongEnough ? 'none' : 'auto',
    }),
};
