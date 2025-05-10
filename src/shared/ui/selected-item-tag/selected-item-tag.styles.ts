import { TagCloseButtonProps, TagLabelProps, TagProps } from '@chakra-ui/react';

export type SelectedItemTagStyleProps = {
    selectedItemTagCloseIcon: TagCloseButtonProps;
    selectedItemTagContainer: TagProps;
    selectedItemTagText: TagLabelProps;
};

export const selectedItemTagStyles: SelectedItemTagStyleProps = {
    selectedItemTagCloseIcon: {
        boxSize: 2.5,
        color: 'lime.700',
        cursor: 'pointer',
    },
    selectedItemTagContainer: {
        alignItems: 'center',
        bgColor: 'lime.100',
        borderColor: 'lime.400',
        borderRadius: 'md',
        borderStyle: 'solid',
        borderWidth: '1px',
        gap: 2,
        h: 5,
        px: 2,
    },
    selectedItemTagText: {
        color: 'lime.700',
        fontSize: 'xs',
        fontWeight: 'medium',
        lineHeight: '4',
    },
};
