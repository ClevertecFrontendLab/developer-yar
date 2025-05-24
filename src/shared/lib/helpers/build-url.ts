export const buildUrl = (segments: string[], relative: boolean = false): string => {
    const cleanedSegments = segments.map((s) => s.replace(/^\/+|\/+$/g, ''));
    const path = cleanedSegments.join('/');
    return relative ? `/${path}` : path;
};
