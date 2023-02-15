import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { useSearchService } from './search.context';
import { searchCache } from './search.query';

export const useSearch = () => {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState(1);
  const service = useSearchService();

  const fetcher = useCallback(
    (query: string, page: number) => service.searchWithQuery(query, { page }),
    []
  );

  const getSearchResult = useQuery({
    queryKey: searchCache.getSearchPage({ query, page }),
    queryFn: () => fetcher(query, page),
    enabled: query !== '',
  });

  return {
    setQuery,
    setPage,
    getSearchResult,
  };
};
