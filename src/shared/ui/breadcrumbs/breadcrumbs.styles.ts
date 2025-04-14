import { BreadcrumbItemProps } from '@chakra-ui/react';

type BreadcrumbsStyleProps = {
    item: (isLast: boolean) => BreadcrumbItemProps;
};

export const breadcrumbsStyles: BreadcrumbsStyleProps = {
    item: (isLast) => ({
        color: isLast ? 'black' : 'blackAlpha.700',
    }),
};
