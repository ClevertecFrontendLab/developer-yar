import { Params } from 'react-router';

export function assertParamsExist(
    params: Params,
    keys: string[],
): asserts params is Record<string, string> {
    for (const key of keys) {
        if (!params[key]) {
            throw new Error(`The "${key}" parameter is not provided`);
        }
    }
}
