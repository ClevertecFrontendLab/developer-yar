import { FlexProps } from '@chakra-ui/react';

type BloggerCardFooterStyleProps = {
    bloggerActionButtons: FlexProps;
    bloggerMetaContainer: FlexProps;
};

export const bloggerCardFooterStyles: BloggerCardFooterStyleProps = {
    bloggerActionButtons: {
        gap: 2,
    },
    bloggerMetaContainer: {
        justify: 'space-between',
        mt: 'auto',
        w: 'full',
    },
};
