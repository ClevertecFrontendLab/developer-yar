import { hasItems } from '~/shared/lib';

export const removeDefaultValues = <T>(object: T): Partial<T> => {
    if (Array.isArray(object)) {
        return object.map((item) => removeDefaultValues(item)) as unknown as Partial<T>;
    }

    if (object && typeof object === 'object' && !(object instanceof File)) {
        const cleanedObject: Record<string, unknown> = {};

        Object.entries(object).forEach(([key, value]) => {
            if (
                (typeof value === 'string' && value.trim() === '') ||
                (typeof value === 'number' && value === 0)
            )
                return;

            if (value && typeof value === 'object' && !(value instanceof File)) {
                const cleaned = removeDefaultValues(value);
                if (hasItems(Object.keys(cleaned))) {
                    cleanedObject[key] = cleaned;
                }
            } else {
                cleanedObject[key] = value;
            }
        });

        return cleanedObject as Partial<T>;
    }

    return object;
};
