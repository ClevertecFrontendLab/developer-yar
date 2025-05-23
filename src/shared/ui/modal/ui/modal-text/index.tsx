import { Text } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { modalTextStyles as styles } from './index.styles';
import { ModalTextVariant } from './index.types';

type ModalTextProps = {
    variant?: ModalTextVariant;
} & PropsWithChildren;

export const ModalText: FC<ModalTextProps> = ({ children, variant = 'normal' }) => (
    <Text {...styles.text(variant)}>{children}</Text>
);
