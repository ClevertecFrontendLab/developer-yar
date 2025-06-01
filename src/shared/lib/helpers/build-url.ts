export const buildPath = (segments: string[]): string =>
    segments.map((s) => s.replace(/^\/+|\/+$/g, '')).join('/');
export const buildAbsoluteUrl = (...segments: string[]): string => `/${buildPath(segments)}`;
export const buildRelativeUrl = (...segments: string[]): string => buildPath(segments);
