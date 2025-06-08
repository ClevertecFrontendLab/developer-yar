import { Badge, Text } from '@chakra-ui/react';
import { FC, PropsWithChildren, ReactElement } from 'react';

import { tagStyles as styles } from './tag.styles';
import { TagColor } from './tag.types';

type TagProps = Partial<{
    icon: ReactElement;
    variant: TagColor;
}> &
    PropsWithChildren;

export const Tag: FC<TagProps> = ({ children, icon, variant = 'gray' }) => (
    <Badge {...styles.badge(variant)}>
        {icon}
        <Text noOfLines={1} {...styles.text}>
            {children}
        </Text>
    </Badge>
);
