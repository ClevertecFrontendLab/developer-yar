import { FC } from 'react';

import { MeasureUnit } from '~/entities/measure-unit';
import { DATA_TEST_ATTRIBUTES } from '~/shared/consts';

type MeasureUnitsMenuProps = {
    index: number;
    measureUnits: MeasureUnit[];
    onChange: (unitId: string) => void;
    value: string;
};

export const CustomMeasureUnitsMenu: FC<MeasureUnitsMenuProps> = ({
    measureUnits,
    onChange,
    value,
    index,
}) => {
    if (typeof Cypress !== 'undefined')
        return (
            <select
                data-test-id={`${DATA_TEST_ATTRIBUTES.RECIPE_INGREDIENTS_MEASURE_UNIT}-${index}`}
                style={{ opacity: '0', position: 'absolute', zIndex: 1 }}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {measureUnits.map((unit) => (
                    <option key={unit.id} value={unit.title}>
                        {unit.title}
                    </option>
                ))}
            </select>
        );
    else return null;
};
