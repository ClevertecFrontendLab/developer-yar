import { extendTheme } from '@chakra-ui/react';

import { componentsWithDefaultStyles } from './reset';

const styles = {
    global: {
        '*': {
            scrollbarColor:
                'var(--chakra-colors-blackAlpha-300) var(--chakra-colors-blackAlpha-50)',
            scrollbarWidth: 'thin',
        },
        '*::-webkit-scrollbar': {
            width: '2px',
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'var(--chakra-colors-blackAlpha-300)',
            borderRadius: '0.5rem',
        },
        '*::-webkit-scrollbar-track': {
            backgroundColor: 'var(--chakra-colors-blackAlpha-50)',
            borderRadius: '0.5rem',
        },
    },
};

const sizes = {
    footer: '84px',
    headerBase: '4rem',
    headerXL: '5rem',
    maxContentWidth: '85rem',
    maxPageWidth: '120rem',
    minPageWidth: '20rem',
};

const gridLayout = {
    gap: { '2xl': 6, base: 3, md: 4 },
    gridTemplateColumns: {
        '3xl': 'repeat(2,1fr)',
        base: '1fr',
        md: 'repeat(2,1fr)',
        xl: '1fr',
    },
};

const pageLayout = {
    flexDirection: 'column',
    gap: { base: 8, xl: 10 },
    justifyContent: 'center',

    pl: { base: 4, md: 5, xl: 0 },
    pr: { base: 4, md: 5, xl: 0 },
};

const subtleOutline = {
    outline: '1px solid',
    outlineColor: 'blackAlpha.200',
    outlineOffset: '0px',
};

const subtleOutlineHover = {
    ...subtleOutline,
    _hover: {
        boxShadow: '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
    },
    borderRadius: 'lg',
    cursor: 'pointer',
    transition: 'box-shadow 0.2s ease-in-out',
};

export const layerStyles = {
    gridLayout,
    pageLayout,
    subtleOutline,
    subtleOutlineHover,
};

const colors = {
    lime: {
        100: '#eaffc7',
        150: '#d7ff94',
        300: '#c4ff61',
        400: '#b1ff2e',
        50: '#ffffd3',
        600: '#2db100',
        700: '#207e00',
        800: '#134b00',
    },
};

const breakpoints = {
    '3xl': '112em',
};

const theme = extendTheme({
    breakpoints,
    colors,
    components: {
        ...componentsWithDefaultStyles,
    },
    layerStyles,
    sizes,
    styles,
});

export { theme };
