import { Text } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { selectedItemTagStyles as styles } from './selected-item-tag.styles';

type SelectedItemTagProps = PropsWithChildren;

export const SelectedItemTag: FC<SelectedItemTagProps> = ({ children }) => (
    <Text {...styles.selectedItemTag}>{children}</Text>
);
