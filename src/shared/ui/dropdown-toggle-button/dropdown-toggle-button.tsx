import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Button, ButtonProps, PopoverTrigger } from '@chakra-ui/react';
import { FC } from 'react';

import { dropdownToggleButtonStyles as styles } from './dropdown-toggle-button.styles';

type DropdownToggleButtonProps = {
    dataTestId: string;
    isOpen: boolean;
} & ButtonProps;

export const DropdownToggleButton: FC<DropdownToggleButtonProps> = ({
    children,
    isOpen,
    dataTestId,
    ...props
}) => (
    <PopoverTrigger>
        <Button
            rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            {...props}
            {...styles.dropdownToggleButton(isOpen)}
            data-test-id={dataTestId}
        >
            {children}
        </Button>
    </PopoverTrigger>
);
