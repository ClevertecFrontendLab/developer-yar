import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Button, Popover, PopoverAnchor, PopoverBody, PopoverContent } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import { menuStyles as styles } from './menu.styles';

type MenuProps = {
    bodyContent: ReactNode;
    buttonContent: ReactNode;
    isOpen: boolean;
    onToggle: () => void;
};

export const Menu: FC<MenuProps> = ({ bodyContent, buttonContent, isOpen, onToggle }) => (
    <Popover isOpen={isOpen}>
        <PopoverAnchor>
            <Button
                rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                onClick={onToggle}
                {...styles.popoverWrapper(isOpen)}
            >
                {buttonContent}
            </Button>
        </PopoverAnchor>
        <PopoverContent {...styles.popoverContent}>
            <PopoverBody {...styles.popoverBody}>{bodyContent}</PopoverBody>
        </PopoverContent>
    </Popover>
);
