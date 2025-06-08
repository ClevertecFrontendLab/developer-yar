import { TabProps } from '@chakra-ui/react';

import { TabVariant } from './index.types';

type TabStyleProps = {
    [key in TabVariant]: TabProps;
};

const commonTab: TabProps = { color: 'lime.800', fontWeight: 'medium', pos: 'relative' };

export const tabStyles: TabStyleProps = {
    auth: {
        ...commonTab,
        _selected: {
            _after: {
                bgColor: 'lime.700',
                bottom: 0,
                content: '""',
                h: '2px',
                left: 0,
                pos: 'absolute',
                w: 'full',
            },
            color: 'lime.700',
        },
        fontSize: { base: 'md', xl: 'lg' },
        lineHeight: { base: '6', xl: '7' },
        px: { base: 6 },
        py: 6,
    },
    recipe: {
        ...commonTab,
        _selected: {
            _after: {
                bgColor: 'lime.600',
                bottom: 0,
                content: '""',
                h: '2px',
                left: 0,
                pos: 'absolute',
                w: 'full',
            },
            color: 'lime.600',
        },
        fontSize: { base: 'sm', xl: 'md' },
        lineHeight: { base: 5, xl: '6' },
        px: 4,
        py: { base: 1, xl: 2 },
    },
};
