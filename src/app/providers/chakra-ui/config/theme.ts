import { extendTheme } from '@chakra-ui/react';

const sizes = {
    headerXL: '5rem',
    headerBase: '4rem',
    maxContentWidth: '85rem',
    maxPageWidth: '120rem',
};

export const layerStyles = {
    subtleOutline: {
        outline: '1px solid',
        outlineColor: 'blackAlpha.200',
        outlineOffset: '0px',
        borderRadius: 'lg',
        transition: 'box-shadow 0.2s ease-in-out',
        cursor: 'pointer',
        _hover: {
            boxShadow:
                '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
        },
    },
    gridLayout: {
        gridTemplateColumns: {
            base: '1fr',
            md: 'repeat(2,1fr)',
            xl: '1fr',
            '3xl': 'repeat(2,1fr)',
        },
        gap: { base: 3, md: 4, '2xl': 6 },
    },
};

const colors = {
    lime: {
        50: '#ffffd3',
        100: '#eaffc7',
        150: '#d7ff94',
        300: '#c4ff61',
        400: '#b1ff2e',
        600: '#2db100',
        700: '#207e00',
        800: '#134b00',
    },
};

const breakpoints = {
    '3xl': '112em',
};

const theme = extendTheme({
    layerStyles,
    sizes,
    colors,
    breakpoints,
});

export { theme };
