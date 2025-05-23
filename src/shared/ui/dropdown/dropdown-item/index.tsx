import { Flex } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { dropdownItemStyles as styles } from './index.styles';

export const DropdownItem: FC<PropsWithChildren> = ({ children }) => (
    <Flex {...styles.dropdownItem}>{children}</Flex>
);
