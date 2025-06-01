import { Text, Wrap, WrapItem } from '@chakra-ui/react';
import { FC, useMemo } from 'react';

import { SelectedItemTag } from '~/shared/ui/selected-item-tag';

import { DropdownPreviewStyles as styles } from '../index.styles';
import { DropdownPreviewItem } from '../index.types';

type Props = {
    crop?: boolean;
    items: DropdownPreviewItem[];
    placeholder?: string;
    shouldShowPlaceholder: boolean;
};

export const MultipleDropdownPreview: FC<Props> = ({
    crop = false,
    items,
    placeholder = 'Выберите из списка...',
    shouldShowPlaceholder,
}) => {
    const filteredItems = useMemo(() => {
        const maxVisibleItems = 2;
        if (!crop || items.length <= maxVisibleItems) return items;

        return items
            .slice(0, maxVisibleItems + 1)
            .map((item, index) =>
                index === maxVisibleItems
                    ? { id: 'rest', title: `+${items.length - maxVisibleItems}` }
                    : item,
            );
    }, [items, crop]);

    return (
        <Wrap {...styles.tags}>
            {shouldShowPlaceholder ? (
                <Text noOfLines={1} {...styles.default}>
                    {placeholder}
                </Text>
            ) : (
                filteredItems.map((item) => (
                    <WrapItem key={item.id}>
                        <SelectedItemTag>{item.title}</SelectedItemTag>
                    </WrapItem>
                ))
            )}
        </Wrap>
    );
};
