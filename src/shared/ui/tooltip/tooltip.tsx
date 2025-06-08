import { Box, Tooltip as BaseTooltip, TooltipProps } from '@chakra-ui/react';
import { FC } from 'react';

import { tooltipStyles as styles } from './tooltip.styles';

export const Tooltip: FC<TooltipProps> = ({ children, ...props }) => (
    <BaseTooltip {...props} {...styles.tooltip}>
        <Box>{children}</Box>
    </BaseTooltip>
);
