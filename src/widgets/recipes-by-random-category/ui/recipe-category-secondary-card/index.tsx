import { Flex, Image, Text } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { recipeCategorySecondaryCardStyles as styles } from './index.styles';

type RecipeCategorySecondaryCardProps = {
    icon: string;
    title: string;
} & PropsWithChildren;

export const RecipeCategorySecondaryCard: FC<RecipeCategorySecondaryCardProps> = ({
    children,
    icon,
    title,
}) => (
    <Flex {...styles.container}>
        <Flex {...styles.info}>
            <Image src={icon} {...styles.icon} />
            <Text noOfLines={1} {...styles.title}>
                {title}
            </Text>
        </Flex>
        {children}
    </Flex>
);
