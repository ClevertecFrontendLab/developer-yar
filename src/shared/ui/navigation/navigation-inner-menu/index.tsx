import { chakra, Flex, Link } from '@chakra-ui/react';
import { FC } from 'react';
import { Link as ReactRouterLink } from 'react-router';

import { useIsActiveLink } from '~/shared/lib';
import { InnerNavigationMenu } from '~/shared/model';

import { navigationInnerItemStyles as styles } from './index.styles';

interface NavigationInnerItemProps extends InnerNavigationMenu {}

export const NavigationInnerItem: FC<NavigationInnerItemProps> = ({ id, name, url }) => {
    const isActive = useIsActiveLink(url);

    return (
        <Flex key={id} {...styles.itemWrapper}>
            <Flex {...styles.iconContainer}>
                <chakra.span className='icon' {...styles.activeIndicator(isActive)} />
            </Flex>
            <Link as={ReactRouterLink} to={url} {...styles.link(isActive)}>
                {name}
            </Link>
        </Flex>
    );
};
