import { Button, ButtonProps } from '@chakra-ui/react';
import { FC } from 'react';

import { modalButtonStyles as styles } from './index.styles';
import { ModalButtonVariant } from './index.types';

type ModalButtonProps = {
    variant?: ModalButtonVariant;
} & ButtonProps;

export const ModalButton: FC<ModalButtonProps> = ({ children, variant = 'black', ...props }) => (
    <Button {...styles.button(variant)} {...props}>
        {children}
    </Button>
);
