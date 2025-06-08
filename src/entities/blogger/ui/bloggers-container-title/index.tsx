import { Heading } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { bloggersConatinerTitleStyles as styles } from './index.styles';

export const BloggersContainerTitle: FC<PropsWithChildren> = ({ children }) => (
    <Heading as='h2' {...styles.title}>
        {children}
    </Heading>
);
