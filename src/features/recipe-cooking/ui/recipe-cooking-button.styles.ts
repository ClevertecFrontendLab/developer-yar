import { ButtonProps } from '@chakra-ui/react';

import { RecipeCookingButtonVariant } from '../model/types';

const baseButtonStyles: ButtonProps = {
    borderRadius: 'md',
    borderStyle: 'solid',
    borderWidth: '1px',
    flexShrink: 0,
    fontWeight: 'semibold',
    lineHeight: '5',
    py: 0,
};

export const recipeCookingButtonVariants: Record<RecipeCookingButtonVariant, ButtonProps> = {
    black: {
        ...baseButtonStyles,
        bgColor: 'blackAlpha.900',
        borderColor: 'blackAlpha.200',
        color: 'white',
        fontSize: { base: 'xs', xl: 'sm' },
        h: { base: 6, xl: 8 },
        minW: '70px',
        pl: { base: 0, md: '26px', xl: 3 },
        pr: { base: 0, md: 2, xl: 3 },
    },
    green: {
        ...baseButtonStyles,
        bgColor: 'white',
        borderColor: 'lime.600',
        color: 'lime.600',
        fontSize: { '2xl': 'sm', base: 'xs' },
        h: 8,
        w: { '2xl': '87px', base: '70px' },
    },
};
