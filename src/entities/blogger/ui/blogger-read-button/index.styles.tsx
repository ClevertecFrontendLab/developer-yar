import { ButtonProps } from '@chakra-ui/react';

import { BloggerReadButtonVariant } from './index.types';

const followedVariantButton: ButtonProps = {
    fontSize: 'sm',
    lineHeight: '5',
    w: '74px',
};

const othersVariantButton: ButtonProps = {
    fontSize: 'xs',
    lineHeight: '4',
    w: '59px',
};

export const bloggerReadButtonStyles = (variant: BloggerReadButtonVariant): ButtonProps => ({
    borderColor: 'lime.600',
    borderRadius: 'md',
    borderStyle: 'solid',
    borderWidth: '1px',
    color: 'lime.600',
    fontWeight: 'semibold',
    h: 6,
    px: 3,
    ...(variant === 'followed' ? followedVariantButton : othersVariantButton),
});
