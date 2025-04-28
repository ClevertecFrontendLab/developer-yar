import { Text, Wrap, WrapItem } from '@chakra-ui/react';
import { FC } from 'react';

import { SelectedItemTag } from '~/shared/ui/selected-item-tag';

import { DropdownPreviewStyles as styles } from './dropdown-preview.styles';

type DropdownPreviewItem = {
    id: number | string;
    title: string;
};

type DropdownPreviewProps = {
    items: DropdownPreviewItem[];
    placeholder?: string;
    shouldShowPlaceholder: boolean;
};

export const DropdownPreview: FC<DropdownPreviewProps> = ({
    items,
    shouldShowPlaceholder,
    placeholder = 'Выберите из списка...',
}) => (
    <Wrap {...styles.tags}>
        {shouldShowPlaceholder ? (
            <Text noOfLines={1} {...styles.default}>
                {placeholder}
            </Text>
        ) : (
            items.map((item) => (
                <WrapItem key={item.id}>
                    <SelectedItemTag> {item.title}</SelectedItemTag>
                </WrapItem>
            ))
        )}
    </Wrap>
);
