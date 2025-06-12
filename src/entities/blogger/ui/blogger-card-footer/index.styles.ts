import { FlexProps } from '@chakra-ui/react';

import { BloggerCardFooterVariant } from '../../model/types';

type BloggerCardFooterStyleProps = {
    bloggerActionButtons: FlexProps;
    bloggerMetaContainer: (variant: BloggerCardFooterVariant) => FlexProps;
};

export const bloggerCardFooterStyles: BloggerCardFooterStyleProps = {
    bloggerActionButtons: {
        gap: 2,
    },
    bloggerMetaContainer: (variant: BloggerCardFooterVariant): FlexProps => ({
        align: variant === 'row' ? 'flex-start' : 'flex-end',
        direction: variant === 'row' ? 'row' : 'column-reverse',
        gap: 4,
        wrap: 'wrap',
        justify: 'space-between',
        mt: 'auto',
        w: 'full',
    }),
};
