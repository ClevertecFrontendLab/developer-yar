import { ButtonProps, IconButtonProps, IconProps, StackProps, TextProps } from '@chakra-ui/react';

export type RecipeFilterStyleProps = {
    clearButton: ButtonProps;
    closeIcon: IconProps;
    closeIconButton: ButtonProps;
    drawerContent: StackProps;
    dropdownButton: ButtonProps;
    dropdownItem: ButtonProps;
    dropdownPreview: ButtonProps;
    filterBodyContainer: StackProps;
    filterButtonContainer: Omit<IconButtonProps, 'aria-label'>;
    filterFooterContainer: StackProps;
    filterHeaderText: TextProps;
    filterIcon: IconProps;
    findRecipeButton: (isDisabled: boolean) => ButtonProps;
};

export const filterRecipesStyles: RecipeFilterStyleProps = {
    clearButton: {
        bgColor: 'whiteAlpha.100',
        borderColor: 'blackAlpha.600',
        borderRadius: 'md',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: 'blackAlpha.800',
        fontSize: { base: 'sm', xl: 'lg' },
        fontWeight: 'semibold',
        h: '12',
        lineHeight: { base: '5', xl: '7' },
        px: { base: 3, xl: 6 },
        w: '205px',
    },
    closeIcon: {
        boxSize: 6,
    },
    closeIconButton: {
        pos: 'relative',
        right: 'auto',
        top: 'auto',
    },
    drawerContent: {
        gap: { base: 4, xl: 6 },
        maxW: { base: '344px', md: '463px' },
        pl: { base: 4, xl: 8 },
        pr: { base: 5, xl: 8 },
        py: { base: 4, xl: 8 },
    },
    dropdownButton: {
        bgColor: 'transparent',
        border: 'none',
        px: 3,
        py: 2,
    },
    dropdownItem: {
        px: 4,
        py: 2,
    },
    dropdownPreview: {
        bgColor: 'transparent',
        border: 'none',
        color: 'black',
    },
    filterBodyContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: { base: 4, xl: 6 },
        p: 0,
    },
    filterButtonContainer: {
        borderColor: 'blackAlpha.600',
        borderRadius: '6px',
        borderStyle: 'solid',
        borderWidth: '1px',
        boxSize: { base: 8, xl: 12 },
        cursor: 'pointer',
        flexShrink: 0,
        minW: 0,
    },
    filterFooterContainer: {
        gap: 2,
        p: 0,
    },
    filterHeaderText: {
        color: 'black',
        display: 'flex',
        fontSize: '2xl',
        fontWeight: 'bold',
        justifyContent: 'space-between',
        lineHeight: '8',
        p: 0,
    },
    filterIcon: {
        boxSize: 6,
    },
    findRecipeButton: (isDisabled: boolean): ButtonProps => ({
        bgColor: 'blackAlpha.900',
        borderColor: 'blackAlpha.200',
        borderRadius: 'md',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: 'white',
        fontSize: { base: 'sm', xl: 'lg' },
        fontWeight: 'semibold',
        h: '12',
        lineHeight: { base: '5', xl: '7' },
        pointerEvents: isDisabled ? 'none' : 'auto',
        px: { base: 3, xl: 6 },
        w: '172px',
    }),
};
