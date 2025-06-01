import { Text } from '@chakra-ui/react';
import { FC } from 'react';

import { DropdownPreviewStyles as styles } from '../index.styles';

type SingleDropdownPreviewProps = {
    item: string;
    shouldShowPlaceholder: boolean;
    placeholder?: string;
};

export const SingleDropdownPreview: FC<SingleDropdownPreviewProps> = ({
    item,
    placeholder = 'Выберите из списка...',
    shouldShowPlaceholder,
}) => (
    <Text noOfLines={1} {...styles.default}>
        {shouldShowPlaceholder ? placeholder : item}
    </Text>
);
