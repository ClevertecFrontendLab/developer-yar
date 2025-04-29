import { Flex } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { dropdownItemStyles as styles } from './dropdown-item.styles';

type DropdownItemProps = PropsWithChildren;

export const DropdownItem: FC<DropdownItemProps> = ({ children }) => (
    <Flex {...styles.dropdownItem}>{children}</Flex>
);
