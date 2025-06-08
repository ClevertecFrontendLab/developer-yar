import { StackProps, TextProps } from '@chakra-ui/react';

type NoteCardStyleProps = {
    note: StackProps;
    noteDate: TextProps;
    noteText: TextProps;
};

const baseTextStyles = {
    fontSize: 'sm',
    fontWeight: 'normal',
    lineHeight: '5',
};

export const noteCardStyles: NoteCardStyleProps = {
    note: {
        bgColor: 'white',
        borderRadius: 'lg',
        layerStyle: 'subtleOutline',
        pb: 5,
        pt: 7,
        px: 6,
    },
    noteDate: {
        ...baseTextStyles,
        color: 'lime.600',
    },
    noteText: {
        ...baseTextStyles,
        color: 'black',
    },
};
