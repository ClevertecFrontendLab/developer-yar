import { Text } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { modalTextStyles as styles } from './index.styles';
import { ModalTextColorVariant, ModalTextWeightVariant } from './index.types';

type ModalTextProps = Partial<{
    color: ModalTextColorVariant;
    weight: ModalTextWeightVariant;
}> &
    PropsWithChildren;

export const ModalText: FC<ModalTextProps> = ({ children, color = 'dark', weight = 'normal' }) => (
    <Text {...styles.text(color, weight)}>{children}</Text>
);
