export const getUniqueArray = <T>(array: T[]): T[] => {
    const seen = new Set();
    return array.filter((item) => {
        const key = JSON.stringify(item);
        return seen.has(key) ? false : seen.add(key);
    });
};
