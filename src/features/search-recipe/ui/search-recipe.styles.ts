import type {
    CenterProps,
    FlexProps,
    IconProps,
    InputProps,
    InputRightElementProps,
    SelectProps,
    StackProps,
    SwitchProps,
    TextProps,
} from '@chakra-ui/react';

type SearchRecipeStyleProps = {
    filterButtonContainer: CenterProps;
    filterIcon: IconProps;
    filterAndSearchWrapper: FlexProps;
    filterRowWrapper: FlexProps;
    input: InputProps;
    inputRightElement: InputRightElementProps;
    inputWrapper: FlexProps;
    searchIcon: IconProps;
    select: SelectProps;
    stackWrapper: StackProps;
    switchContainer: CenterProps;
    switchLabel: TextProps;
    switch: SwitchProps;
};

export const searchRecipeStyles: SearchRecipeStyleProps = {
    filterButtonContainer: {
        borderColor: 'blackAlpha.600',
        borderRadius: '6px',
        borderStyle: 'solid',
        borderWidth: '1px',
        boxSize: { base: 8, xl: 12 },
        cursor: 'pointer',
        flexShrink: 0,
    },
    filterIcon: {
        boxSize: 6,
    },
    filterAndSearchWrapper: {
        gap: 3,
    },
    filterRowWrapper: {
        display: { base: 'none', xl: 'flex' },
        gap: 4,
        justify: 'right',
    },
    input: {
        borderColor: 'blackAlpha.600',
        borderRadius: 'md',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: 'lime.800',
        fontSize: { base: 'sm', xl: 'lg' },
        fontWeight: 'normal',
        h: { base: 8, xl: 12 },
        _placeholder: { color: 'lime.800' },
    },
    inputWrapper: {
        grow: 1,
    },
    inputRightElement: {
        boxSize: { base: 8, xl: 12 },
        pointerEvents: 'none',
    },
    searchIcon: {
        color: 'black',
    },
    select: {
        color: 'blackAlpha.700',
        fontSize: 'md',
        fontWeight: 'normal',
        lineHeight: '6',
        maxW: '234px',
    },
    stackWrapper: {
        gap: 4,
        maxW: { base: '448px', xl: '518px' },
        w: 'full',
    },
    switch: {
        size: 'md',
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
