type SearchState = {
    isSearching: boolean;
    query: string;
};

export const initialState: SearchState = {
    isSearching: false,
    query: '',
};
