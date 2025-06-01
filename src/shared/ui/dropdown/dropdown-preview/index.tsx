import { FC } from 'react';

import { DropdownPreviewItem } from './index.types';
import { MultipleDropdownPreview } from './multiple-dropdown-preview';
import { SingleDropdownPreview } from './single-dropdown-preview';

export type DropdownPreviewProps = {
    items: string | DropdownPreviewItem[];
    shouldShowPlaceholder: boolean;
    crop?: boolean;
    mode?: 'single' | 'multiple';
    placeholder?: string;
};

export const DropdownPreview: FC<DropdownPreviewProps> = ({
    mode = 'multiple',
    crop,
    items,
    placeholder,
    shouldShowPlaceholder,
}) =>
    mode === 'single' ? (
        <SingleDropdownPreview
            item={typeof items === 'string' ? items : ''}
            placeholder={placeholder}
            shouldShowPlaceholder={shouldShowPlaceholder}
        />
    ) : (
        <MultipleDropdownPreview
            crop={crop}
            items={Array.isArray(items) ? items : []}
            placeholder={placeholder}
            shouldShowPlaceholder={shouldShowPlaceholder}
        />
    );
