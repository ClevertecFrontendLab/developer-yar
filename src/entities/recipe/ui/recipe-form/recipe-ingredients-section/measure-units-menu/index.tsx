import { useDisclosure } from '@chakra-ui/react';
import { FC } from 'react';

import { useGetMeasureUnitsQuery } from '~/entities/measure-unit';
import { getErrorOutline } from '~/shared/lib';
import { useApiStatusSync } from '~/shared/model';
import { Checkbox } from '~/shared/ui/checkbox';
import {
    Dropdown,
    DropdownItem,
    DropdownItems,
    DropdownPreview,
    DropdownToggleButton,
} from '~/shared/ui/dropdown';

import { CustomMeasureUnitsMenu } from './custom-measure-unit-menu';

type MeasureUnitsMenuProps = {
    index: number;
    isInvalid: boolean;
    onChange: (unitId: string) => void;
    value: string;
};

export const MeasureUnitsMenu: FC<MeasureUnitsMenuProps> = ({
    index,
    value,
    onChange,
    isInvalid,
}) => {
    const { isOpen, onClose, onToggle } = useDisclosure();

    const {
        data: measureUnits = [],
        isLoading: isMeasureUnitsLoading,
        isError: isMeasureUnitsError,
        isSuccess: isMeasureUnitsSuccess,
    } = useGetMeasureUnitsQuery();

    useApiStatusSync(isMeasureUnitsLoading, { isError: isMeasureUnitsError });

    if (isMeasureUnitsSuccess && measureUnits)
        return (
            <>
                <CustomMeasureUnitsMenu
                    index={index}
                    measureUnits={measureUnits}
                    value={value}
                    onChange={onChange}
                />
                <Dropdown isOpen={isOpen} onClose={onClose}>
                    <DropdownToggleButton
                        isOpen={isOpen}
                        onClick={onToggle}
                        {...getErrorOutline(isInvalid)}
                    >
                        <DropdownPreview
                            items={value}
                            mode='single'
                            placeholder='Единица измерения'
                            shouldShowPlaceholder={!value}
                        />
                    </DropdownToggleButton>

                    <DropdownItems>
                        {measureUnits.map((unit) => (
                            <DropdownItem key={unit.id}>
                                <Checkbox
                                    isChecked={unit.title === value}
                                    onChange={() => onChange(unit.title)}
                                >
                                    {unit.title}
                                </Checkbox>
                            </DropdownItem>
                        ))}
                    </DropdownItems>
                </Dropdown>
            </>
        );
    else return null;
};
