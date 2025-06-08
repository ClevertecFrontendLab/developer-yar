import { BoxProps, ButtonProps, FlexProps, StackProps, TextProps } from '@chakra-ui/react';

type NotesStyleProps = {
    button: ButtonProps;
    container: StackProps;
    note: BoxProps;
    notes: FlexProps;
    notesCount: TextProps;
    title: TextProps;
    titleContainer: TextProps;
};

export const notesStyles: NotesStyleProps = {
    button: {
        borderRadius: 'md',
        color: 'black',
        fontSize: 'sm',
        fontWeight: 'semibold',
        h: 8,
        lineHeight: '5',
        m: 'auto',
        px: 3,
    },
    container: {
        bgColor: 'blackAlpha.50',
        borderRadius: '2xl',
        gap: 4,
        pb: 4,
        pt: { base: 4, xl: 6 },
        px: { base: 4, xl: 6 },
    },
    note: {
        flex: {
            base: '0 0 100%',
            md: '0 0 calc((100% - 32px) / 3)',
        },
    },
    notes: {
        flexWrap: { md: 'wrap' },
        gap: 4,

        sx: {
            '& > :nth-of-type(8n+7), & > :nth-of-type(8n+8)': {
                flex: { md: '0 0 calc(50% - 8px)' },
            },
        },
    },
    notesCount: {
        color: 'blackAlpha.600',
        fontSize: { base: 'xl', xl: '3xl' },
        fontWeight: 'normal',
        lineHeight: { base: '7', xl: '9' },
    },
    title: {
        color: 'black',
        fontSize: { base: 'xl', xl: '4xl' },
        fontWeight: 'normal',
        lineHeight: { base: '7', xl: '10' },
    },
    titleContainer: {
        align: 'center',
        gap: 2,
    },
};
