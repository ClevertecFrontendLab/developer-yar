import { chakra, Flex, Link } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Link as ReactRouterLink } from 'react-router';

import { submenuItemStyles as styles } from './index.styles';

type SubmenuItemProps = {
    isActive: boolean;
    title: string;
    url: string;
};

export const SubmenuItem: FC<SubmenuItemProps> = memo(({ title, url, isActive }) => (
    <Flex {...styles.itemWrapper}>
        <Flex {...styles.iconContainer}>
            <chakra.span className='icon' {...styles.activeIndicator(isActive)} />
        </Flex>
        <Link as={ReactRouterLink} to={url} {...styles.link(isActive)}>
            {title}
        </Link>
    </Flex>
));
