import { PopoverContent, PopoverContentProps } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { dropdownItemsStyles as styles } from './index.styles';

type DropdownItemsProps = PropsWithChildren & PopoverContentProps;

export const DropdownItems: FC<DropdownItemsProps> = ({ children, ...props }) => (
    <PopoverContent {...styles.content} {...props}>
        {children}
    </PopoverContent>
);
