import { chakra, Flex, Link } from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import { Link as ReactRouterLink, useLocation } from 'react-router';

import { getUrlSegments } from '~/shared/lib';

import { Submenu } from '../../../../model/types';
import { submenuItemStyles as styles } from './index.styles';

type SubmenuItemProps = Submenu;

export const SubmenuItem: FC<SubmenuItemProps> = ({ id, title, url }) => {
    const { pathname } = useLocation();
    const isActive = useMemo(() => pathname === url, [pathname, url]);

    return (
        <Flex key={id} {...styles.itemWrapper}>
            <Flex {...styles.iconContainer}>
                <chakra.span className='icon' {...styles.activeIndicator(isActive)} />
            </Flex>
            <Link
                as={ReactRouterLink}
                data-test-id={`${getUrlSegments(url)[1]}${isActive ? '-active' : ''}`}
                to={url}
                {...styles.link(isActive)}
            >
                {title}
            </Link>
        </Flex>
    );
};
