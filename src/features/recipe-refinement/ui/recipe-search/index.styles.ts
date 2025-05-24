import type { FlexProps, IconButtonProps, IconProps, InputProps } from '@chakra-ui/react';

import { SearchResultStatus } from '../../model/types';

type RecipeSearchStyleProps = {
    clearIcon: IconProps;
    clearIconWrapper: (isSearchDisabled: boolean) => Omit<IconButtonProps, 'aria-label'>;
    iconWrapper: Omit<IconButtonProps, 'aria-label'>;
    input: (isQueryNotEmpty: boolean, searchResultStatus: SearchResultStatus) => InputProps;
    inputButtons: FlexProps;
    inputWrapper: FlexProps;
    searchIcon: IconProps;
    searchIconWrapper: (isSearchDisabled: boolean) => Omit<IconButtonProps, 'aria-label'>;
};

const getOutlineColor = (status: SearchResultStatus) => {
    switch (status) {
        case 'success':
            return 'lime.600';
        case 'error':
            return 'red.500';
        default:
            return 'blackAlpha.600';
    }
};

export const recipeSearchStyles: RecipeSearchStyleProps = {
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
    input: (isQueryNotEmpty: boolean, searchResultStatus: SearchResultStatus): InputProps => ({
        _focus: {
            outlineColor: getOutlineColor(searchResultStatus),
            outlineWidth: searchResultStatus === 'error' ? '2px' : '1px',
        },
        _placeholder: { color: 'lime.800' },
        border: 'none',
        borderRadius: 'md',
        boxShadow: 'none',
        color: 'lime.800',
        focusBorderColor: 'blackAlpha.600',
        fontSize: { base: 'sm', xl: 'lg' },
        fontWeight: 'normal',
        h: { base: 8, xl: 12 },
        outline: '1px solid',
        outlineColor: 'blackAlpha.600',
        paddingInlineEnd: isQueryNotEmpty ? 8 : 16,
        paddingInlineStart: { base: 3, xl: 4 },
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
    searchIconWrapper: (isSearchDisabled: boolean): Omit<IconButtonProps, 'aria-label'> => ({
        pointerEvents: isSearchDisabled ? 'none' : 'auto',
    }),
};
