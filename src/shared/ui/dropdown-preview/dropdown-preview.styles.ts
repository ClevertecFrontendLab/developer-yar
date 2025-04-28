import { TextProps, WrapProps } from '@chakra-ui/react';

type DropdownPreviewStyleProps = {
    default: TextProps;
    tags: WrapProps;
};

export const DropdownPreviewStyles: DropdownPreviewStyleProps = {
    default: {
        color: 'blackAlpha.700',
        fontSize: 'md',
        fontWeight: 'normal',
        lineHeight: 6,
        textAlign: 'center',
    },
    tags: {},
};
