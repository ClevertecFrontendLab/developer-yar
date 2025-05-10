export const buildUrl = (segments: string[], relative: boolean = false): string => {
    const path = segments.join('/');
    return relative ? `/${path}` : path;
};
