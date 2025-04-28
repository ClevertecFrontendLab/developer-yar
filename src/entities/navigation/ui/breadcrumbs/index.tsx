import {
    Breadcrumb as BreadcrumbWrapper,
    BreadcrumbItem,
    Link as ChakraLink,
} from '@chakra-ui/react';
import { FC } from 'react';
import { Link as ReactRouterLink } from 'react-router';

import { useAppSelector } from '~/shared/model';

import { useBreadcrumbs } from '../../hooks/use-breadcrumbs';
import { selectBreadcrumbs } from '../../model/selectors';
import { breadcrumbsStyles as styles } from './index.styles';
import { Separator } from './separator';

export const Breadcrumbs: FC = () => {
    useBreadcrumbs();
    const breadcrumbs = useAppSelector(selectBreadcrumbs);

    const lastIndex = breadcrumbs.length - 1;

    return (
        <BreadcrumbWrapper separator={<Separator />} {...styles.breadcrumbs}>
            {breadcrumbs.map((breadcrumb, index) => (
                <BreadcrumbItem
                    key={index}
                    {...styles.item(index === lastIndex)}
                    isCurrentPage={index === lastIndex}
                >
                    <ChakraLink
                        as={ReactRouterLink}
                        to={breadcrumb.url}
                        {...(index === lastIndex ? { noOfLines: 1 } : {})}
                    >
                        {breadcrumb.title}
                    </ChakraLink>
                </BreadcrumbItem>
            ))}
        </BreadcrumbWrapper>
    );
};
