import {
    ButtonProps,
    CenterProps,
    FlexProps,
    IconButtonProps,
    IconProps,
    InputProps,
    SwitchProps,
    TextProps,
    WrapProps,
} from '@chakra-ui/react';

export type RecipeAllergenFilterStyleProps = {
    addIcon: IconProps;
    allergenTagDefault: TextProps;
    allergenTags: WrapProps;
    container: FlexProps;
    content: FlexProps;
    dropdownToggleButton: (isOpenOrFilterEnabled: boolean) => ButtonProps;
    popoverAddAllergen: FlexProps;
    popoverAddAllergenButton: ButtonProps;
    popoverAddAllergenInput: InputProps;
    popoverToggle: Omit<IconButtonProps, 'aria-label'>;
    removeIcon: IconProps;
    removeIconWrapper: FlexProps;
    switch: SwitchProps;
    switchContainer: CenterProps;
    switchLabel: TextProps;
};

export const recipeAllergenFilterStyles: RecipeAllergenFilterStyleProps = {
    addIcon: {
        boxSize: 3,
    },
    allergenTagDefault: {
        color: 'blackAlpha.700',
        fontSize: 'md',
        fontWeight: 'normal',
        lineHeight: '5',
        textAlign: 'center',
    },
    allergenTags: {},
    container: {
        minH: 10,
        pos: 'relative',
    },
    content: {
        pos: 'absolute',
        right: 0,
        top: 0,
    },
    dropdownToggleButton: (isOpenOrFilterEnabled: boolean): ButtonProps => ({
        h: isOpenOrFilterEnabled ? 'auto' : 10,
        py: isOpenOrFilterEnabled ? '9px' : 0,
        w: '269px',
    }),
    popoverAddAllergen: {
        alignItems: 'center',
        gap: 2,
        pl: 6,
        pr: 2,
        py: 2,
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
    popoverToggle: {
        _hover: {
            bgColor: 'transparent',
        },
        alignSelf: 'start',
        bgColor: 'transparent',
        boxSize: 10,
    },
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
