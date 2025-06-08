import { createApi } from '@reduxjs/toolkit/query/react';

import { createBaseQuery, ENDPOINTS } from '~/shared/api';

import { mapMeasureUnitsFromDto } from '../mappers/map-measure-units-from-dto';
import { MeasureUnit } from './types';

export const measureUnitsApi = createApi({
    baseQuery: createBaseQuery(),
    endpoints: (build) => ({
        getMeasureUnits: build.query<MeasureUnit[], void>({
            query: () => ENDPOINTS.MEASURE_INITS,
            transformResponse: mapMeasureUnitsFromDto,
        }),
    }),
    reducerPath: 'measureUnitsApi',
});

export const { useGetMeasureUnitsQuery } = measureUnitsApi;
