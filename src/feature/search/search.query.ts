export const SEARCH_QUERY_KEY = 'search';

export const searchCache = {
  getSearchPage: ({ query, page }: { query: string; page: number }) => [
    SEARCH_QUERY_KEY,
    query,
    page,
  ],
};
