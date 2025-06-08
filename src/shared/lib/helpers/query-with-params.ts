/**
 * Очищает параметр запроса от null и undefined (и по желанию пустых строк).
 */

import { hasItems } from '~/shared/lib';

const filterQueryParams = (params: QueryParam) =>
    Object.fromEntries(
        Object.entries(params).filter(([_, value]) =>
            typeof Cypress === 'undefined' ? value != null && value !== '' : true,
        ),
    );

type QueryWithParams = {
    params: QueryParam;
    url: string;
};

/**
 * Формирует аргументы для RTK Query: если нет params — возвращает только url.
 */
type QueryParam = Record<string, string | number | boolean>;

export const queryWithParams = ({ params, url }: QueryWithParams) => {
    if (!hasItems(Object.keys(params))) {
        return { url };
    }
    return {
        params: filterQueryParams(params),
        url,
    };
};
