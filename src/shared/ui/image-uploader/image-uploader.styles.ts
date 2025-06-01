import { CenterProps, IconProps, InputProps } from '@chakra-ui/react';

type ImageUploaderStyleProps = {
    container: (isDragging: boolean) => CenterProps;
    fileInput: InputProps;
    pictureIcon: IconProps;
};

export const imageUploaderStyles: ImageUploaderStyleProps = {
    container: (isDragging: boolean): CenterProps => ({
        bgColor: isDragging ? 'blackAlpha.100' : 'blackAlpha.200',
        borderRadius: 'lg',
        cursor: 'pointer',
    }),
    fileInput: {
        display: 'none',
    },
    pictureIcon: {
        boxSize: 8,
    },
};
