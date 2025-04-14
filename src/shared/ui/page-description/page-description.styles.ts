import { TextProps } from '@chakra-ui/react';

type PageDescriptionStyleProps = {
    descriptionText: TextProps;
};

export const pageDescriptionStyles: PageDescriptionStyleProps = {
    descriptionText: {
        color: 'blackAlpha.600',
        fontSize: { base: 'sm', xl: 'md' },
        fontWeight: 'medium',
        lineHeight: { base: '5', xl: '6' },
    },
};
