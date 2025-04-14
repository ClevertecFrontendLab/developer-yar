import { Breadcrumb as BreadcrumbWrapper, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { FC } from 'react';
import { Link as ReactRouterLink } from 'react-router';

import { useBreadcrumbs } from '~/shared/lib';
import { Breadcrumb } from '~/shared/model';

import { breadcrumbsStyles as styles } from './breadcrumbs.styles';
import { Separator } from './separator';

export const Breadcrumbs: FC = () => {
    const breadcrumbs: Breadcrumb[] = useBreadcrumbs();

    return (
        <BreadcrumbWrapper separator={<Separator />}>
            {breadcrumbs.map(({ id, isLast, routeTo, pageTitle }) => (
                <BreadcrumbItem key={id} {...styles.item(isLast)} isCurrentPage={isLast}>
                    <BreadcrumbLink as={ReactRouterLink} to={routeTo}>
                        {pageTitle}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            ))}
        </BreadcrumbWrapper>
    );
};
