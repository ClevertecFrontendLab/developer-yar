import { TextProps } from '@chakra-ui/react';

export type SelectedItemTagStyleProps = {
    selectedItemTag: TextProps;
};

export const selectedItemTagStyles: SelectedItemTagStyleProps = {
    selectedItemTag: {
        borderColor: 'lime.400',
        borderRadius: 'md',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: 'lime.600',
        fontSize: 'xs',
        fontWeight: 'medium',
        gap: 2,
        h: 5,
        lineHeight: '4',
        px: 2,
    },
};
