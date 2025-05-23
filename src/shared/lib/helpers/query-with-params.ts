/**
 * Очищает параметр запроса от null и undefined (и по желанию пустых строк).
 */

const filterQueryParams = (params: QueryParam) =>
    Object.fromEntries(
        Object.entries(params).filter(([_, value]) => value != null && value !== ''),
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
    if (Object.keys(params).length === 0) {
        return { url };
    }
    return {
        params: filterQueryParams(params),
        url,
    };
};
