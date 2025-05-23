export type Allergen = {
    custom: boolean;
    id: number;
    selected: boolean;
    title: string;
};

export type Filter = {
    id: string;
    selected: boolean;
    title: string;
};

export type SearchResultStatus = 'idle' | 'success' | 'error';
