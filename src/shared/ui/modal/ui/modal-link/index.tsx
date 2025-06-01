import { Link } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';
import { Link as ReactRouterLink } from 'react-router';

import { modalLinkStyles as styles } from './index.styles';

type ModalLinkProps = {
    href: string;
} & PropsWithChildren;

export const ModalLink: FC<ModalLinkProps> = ({ children, ...props }) => (
    <Link as={ReactRouterLink} {...props} {...styles.link}>
        {children}
    </Link>
);
