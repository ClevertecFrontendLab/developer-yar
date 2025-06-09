import { MeasureUnitApi } from '../api/measure-unit.api';
import { MeasureUnit } from '../model/types';

export const mapMeasureUnitsFromApi = (measureUnits: MeasureUnitApi[]): MeasureUnit[] =>
    measureUnits.map(({ _id, name }) => ({
        id: _id,
        title: name,
    }));
