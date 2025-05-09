import { Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { selectedItemTagStyles as styles } from './selected-item-tag.styles';

type SelectedItemTagProps = {
    onClick?: () => void;
} & PropsWithChildren;

export const SelectedItemTag: FC<SelectedItemTagProps> = ({ children, onClick }) => (
    <Tag {...styles.selectedItemTagContainer}>
        <TagLabel {...styles.selectedItemTagText}>{children}</TagLabel>
        {onClick && <TagCloseButton onClick={onClick} {...styles.selectedItemTagCloseIcon} />}
    </Tag>
);
