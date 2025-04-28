const normalizeUrl = (url: string) => url.replace(/^\/|\/$/g, '');

export const isEqualUrl = (url1: string, url2: string) => normalizeUrl(url1) === normalizeUrl(url2);

export const urlStartsWith = (url1: string, url2: string) =>
    normalizeUrl(url1).startsWith(normalizeUrl(url2));
