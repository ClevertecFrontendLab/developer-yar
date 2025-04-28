import { BreadcrumbItemProps, FlexProps } from '@chakra-ui/react';

type BreadcrumbsStyleProps = {
    breadcrumbs: FlexProps;
    item: (isLast: boolean) => BreadcrumbItemProps;
};

export const breadcrumbsStyles: BreadcrumbsStyleProps = {
    breadcrumbs: {
        sx: {
            ol: {
                flexWrap: { base: 'wrap', xl: 'nowrap' },
                rowGap: { base: 1, xl: 0 },
            },
        },
    },
    item: (isLast) => ({
        color: isLast ? 'black' : 'gray.700',
        flex: isLast ? '1 1 0' : '0 0 auto',
    }),
};
