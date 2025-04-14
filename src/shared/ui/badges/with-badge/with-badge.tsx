import { Center, CenterProps, IconProps, Text, TextProps } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { withBadgeStyles as styles } from './with-badge.styles';

interface BadgeValueProps {
    value: number;
}

interface CustomStyles {
    wrapperStyles?: CenterProps;
    textStyles?: TextProps;
    iconStyles?: IconProps;
}

export type WithBadgeProps = BadgeValueProps & CustomStyles;

export const withBadge = (Component: FC<IconProps>): FC<WithBadgeProps> => {
    const WithBadgeComponent: FC<WithBadgeProps> = ({
        value,
        wrapperStyles = {},
        textStyles = {},
        iconStyles = {},
    }) => {
        if (value <= 0) return null;

        return (
            <Center {...wrapperStyles}>
                <Component {...iconStyles} />
                <Text {...styles.text} {...textStyles}>
                    {value}
                </Text>
            </Center>
        );
    };

    return memo(WithBadgeComponent);
};
