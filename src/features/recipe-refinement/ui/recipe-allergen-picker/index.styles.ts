import {
    ButtonProps,
    CenterProps,
    FlexProps,
    IconButtonProps,
    IconProps,
    InputProps,
    StackProps,
    SwitchProps,
    TextProps,
} from '@chakra-ui/react';

export type RecipeAllergenPickerStyleProps = {
    addIcon: IconProps;
    dropdownToggleButton: ButtonProps;
    popoverAddAllergen: FlexProps;
    popoverAddAllergenButton: ButtonProps;
    popoverAddAllergenInput: InputProps;
    popoverToggle: Omit<IconButtonProps, 'aria-label'>;
    recipeAllergenPickerContainer: StackProps;
    removeIcon: IconProps;
    removeIconWrapper: FlexProps;
    switch: SwitchProps;
    switchContainer: CenterProps;
    switchLabel: TextProps;
};

export const recipeAllergenPickerBaseStyles: RecipeAllergenPickerStyleProps = {
    addIcon: {
        boxSize: 3,
    },
    dropdownToggleButton: {},
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
        _placeholder: {
            color: 'lime.800',
        },
        borderColor: 'blackAlpha.200',
        borderRadius: 'sm',
        borderWidth: '1px',
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
    recipeAllergenPickerContainer: {
        alignItems: 'start',
        width: 'full',
        zIndex: 'docked',
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
    },
    switchLabel: {
        color: 'black',
        fontSize: 'md',
        fontWeight: 'medium',
        lineHeight: '6',
    },
};

export type RecipeAllergenPickerVariants = {
    filterRecipes: {
        container: StackProps;
        switchContainer: CenterProps;
        toggleButton: ButtonProps;
    };
    recipeAllergenFilter: {
        container: StackProps;
        switchContainer: CenterProps;
        toggleButton: ButtonProps;
    };
};

export const recipeAllergenPickerVariants: RecipeAllergenPickerVariants = {
    filterRecipes: {
        container: {
            direction: 'column',
            gap: 2,
        },
        switchContainer: {
            minH: 'auto',
        },
        toggleButton: {
            minW: '269px',
            py: '9px',
            w: 'full',
        },
    },
    recipeAllergenFilter: {
        container: {
            direction: 'row',
            gap: 4,
        },
        switchContainer: {
            minH: 10,
        },
        toggleButton: {
            minW: '269px',
            py: 0,
            w: '269px',
        },
    },
};
