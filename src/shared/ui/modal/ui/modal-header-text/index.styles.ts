import { TextProps } from '@chakra-ui/react';

type ModalHeaderTextStyleProps = {
    text: TextProps;
};

export const modalHeaderTextStyles: ModalHeaderTextStyleProps = {
    text: {
        color: 'black',
        fontSize: '2xl',
        fontWeight: 'bold',
        lineHeight: '8',
        textAlign: 'center',
    },
};
