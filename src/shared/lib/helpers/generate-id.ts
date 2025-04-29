export const generateId = (): number => {
    const timestamp = Date.now();
    const randomPart = Math.floor(Math.random() * 1000)
        .toString()
        .padStart(3, '0');

    const idString = `${timestamp}${randomPart}`;
    const id = Number(idString);

    return id > Number.MAX_SAFE_INTEGER ? Math.floor(id / 10) : id;
};
