import { Center, IconProps, Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { withBadgeStyles } from './index.styles';
import { BadgeVariant } from './index.types';

export type WithBadgeProps = {
    value: number;
    variant?: BadgeVariant;
};

export const withBadge = (Component: FC<IconProps>): FC<WithBadgeProps> => {
    const WithBadgeComponent: FC<WithBadgeProps> = ({ value, variant = 'small' }) => {
        const styles = withBadgeStyles[variant];

        return (
            <Center {...styles.badgeContainer}>
                <Component {...styles.badgeIcon} />
                <Text {...styles.badgeLabel}>{value}</Text>
            </Center>
        );
    };

    return memo(WithBadgeComponent);
};
