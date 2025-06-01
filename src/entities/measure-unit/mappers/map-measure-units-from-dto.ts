import { MeasureUnitDto } from '../dto/measure-unit.dto';
import { MeasureUnit } from '../model/types';

export const mapMeasureUnitsFromDto = (measureUnits: MeasureUnitDto[]): MeasureUnit[] =>
    measureUnits.map(({ _id, name }) => ({
        id: _id,
        title: name,
    }));
