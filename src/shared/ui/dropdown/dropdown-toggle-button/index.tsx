import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Button, ButtonProps, PopoverTrigger } from '@chakra-ui/react';
import { FC } from 'react';

import { dropdownToggleButtonStyles as styles } from './index.styles';

type DropdownToggleButtonProps = {
    isOpen: boolean;
} & ButtonProps;

export const DropdownToggleButton: FC<DropdownToggleButtonProps> = ({
    children,
    isOpen,
    ...props
}) => (
    <PopoverTrigger>
        <Button
            rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            {...props}
            {...styles.dropdownToggleButton(isOpen)}
        >
            {children}
        </Button>
    </PopoverTrigger>
);
