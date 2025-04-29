import { Heading } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import { pageTitleStyles as styles } from './page-title.styles';

type PageTitleProps = {
    children: ReactNode;
};

export const PageTitle: FC<PageTitleProps> = ({ children }) => (
    <Heading as='h1' {...styles.titleText}>
        {children}
    </Heading>
);
