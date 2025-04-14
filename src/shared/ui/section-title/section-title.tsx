import { Heading } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import { sectionTitleStyles as styles } from './section-title.styles';

interface SectionTitleProps {
    children: ReactNode;
}

export const SectionTitle: FC<SectionTitleProps> = ({ children }) => (
    <Heading as='h2' {...styles.heading}>
        {children}
    </Heading>
);
