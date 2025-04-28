import {
    BoxProps,
    ButtonProps,
    CenterProps,
    CheckboxProps,
    FlexProps,
    IconButtonProps,
    IconProps,
    InputProps,
    PopoverBodyProps,
    PopoverContentProps,
    SwitchProps,
    TextProps,
    WrapProps,
} from '@chakra-ui/react';

export type MenuStyleProps = {
    addIcon: IconProps;
    allergenTagDefault: TextProps;
    allergenTags: WrapProps;
    checkbox: CheckboxProps;
    checkboxContainer: (index: number) => BoxProps;
    container: FlexProps;
    content: FlexProps;
    popoverAddAllergen: FlexProps;
    popoverAddAllergenButton: ButtonProps;
    popoverAddAllergenInput: InputProps;
    popoverBody: PopoverBodyProps;
    popoverContent: PopoverContentProps;
    popoverToggle: Omit<IconButtonProps, 'aria-label'>;
    popoverWrapper: (isOpen: boolean) => ButtonProps;
    removeIcon: IconProps;
    removeIconWrapper: FlexProps;
    switch: SwitchProps;
    switchContainer: CenterProps;
    switchLabel: TextProps;
};

export const menuStyles: MenuStyleProps = {
    addIcon: {
        boxSize: 3,
    },
    allergenTagDefault: {
        color: 'blackAlpha.700',
        fontSize: 'md',
        fontWeight: 'normal',
        lineHeight: 6,
        textAlign: 'center',
    },
    allergenTags: {},
    checkbox: {
        borderRadius: 'sm',
        iconColor: 'black',
        size: 'sm',
        sx: {
            '.chakra-checkbox__control': {
                _checked: {
                    _hover: {
                        bg: 'lime.400 !important',
                        borderColor: 'transparent !important',
                        boxShadow: 'none !important',
                        outline: 'none !important',
                    },
                    bg: 'lime.400',
                    borderColor: 'lime.400',
                    outline: 'none !important',
                },
                _focus: {
                    boxShadow: 'none',
                    outline: 'none',
                },
                borderColor: 'lime.150',
            },
        },
        width: 'full',
    },
    checkboxContainer: (index: number): BoxProps => ({
        bgColor: index % 2 === 0 ? 'blackAlpha.100' : 'white',

        pos: 'relative',
        px: 4,
        py: 1.5,
    }),
    container: {
        minH: 10,
        pos: 'relative',
        zIndex: 'dropdown',
    },
    content: {
        alignItems: 'flex-start',
        display: { base: 'none', xl: 'flex' },
        gap: 4,
        pos: 'absolute',
        right: 0,
        top: 0,
    },
    popoverAddAllergen: {
        alignItems: 'center',
        gap: 2,
        pl: 6,
        pr: 3,
        py: 3,
    },
    popoverAddAllergenButton: {
        _hover: {
            bgColor: 'transparent',
        },
        bgColor: 'transparent',
        h: 6,
        minW: 6,
    },
    popoverAddAllergenInput: {
        _focus: {
            borderColor: 'blackAlpha.200',
            boxShadow: 'none',
            outline: 'none',
        },
        _placeholder: {
            color: 'lime.800',
        },
        borderColor: 'blackAlpha.200',
        borderRadius: 'sm',
        color: 'lime.800',
        fontSize: 'sm',
        fontWeight: 'medium',
        h: 8,
        lineHeight: '5',
        px: 3,
    },
    popoverBody: {
        p: 0,
    },
    popoverContent: {
        borderRadius: 'md',
        borderWidth: 0,
        boxShadow: 'none',
        color: 'blackAlpha.700',
        fontSize: 'md',
        fontWeight: 'normal',
        lineHeight: '6',
        w: '269px',
        zIndex: 'dropdown',
    },
    popoverToggle: {
        _hover: {
            bgColor: 'transparent',
        },
        alignSelf: 'start',
        bgColor: 'transparent',
        boxSize: 10,
    },
    popoverWrapper: (isOpen: boolean): ButtonProps => ({
        _hover: {
            bgColor: 'white',
        },
        alignItems: 'center',
        bgColor: 'white',
        borderRadius: 'base',
        borderWidth: 'none',

        gap: 2,
        height: 'auto',
        justifyContent: 'space-between',
        minH: 10,
        outline: '1px solid',
        outlineColor: isOpen ? 'lime.300' : 'blackAlpha.100',
        outlineOffset: '0px',
        px: 3,
        py: 2,
        w: '269px',
    }),
    removeIcon: {
        boxSize: 3,
        color: 'lime.600',
    },
    removeIconWrapper: {
        pos: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
    },
    switch: {
        sx: {
            'span.chakra-switch__track[data-checked]': {
                bgColor: 'lime.400',
            },
        },
    },
    switchContainer: {
        gap: 3,
        py: 1.5,
    },
    switchLabel: {
        color: 'black',
        fontSize: 'md',
        fontWeight: 'medium',
        lineHeight: '6',
    },
};
