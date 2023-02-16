import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { useSearchService } from './search.context';
import { searchCache } from './search.query';

type UseSearchOption = {
  perPage?: number;
};

const defaultOption: Required<UseSearchOption> = {
  perPage: 30,
};

export const useSearch = (options?: UseSearchOption) => {
  const { perPage } = { ...defaultOption, ...options };

  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState(1);
  const service = useSearchService();

  const handleQueryChange = useCallback((query: string) => {
    setPage(1);
    setQuery(query);
  }, []);

  const fetcher = useCallback(
    (query: string, page: number) =>
      service.searchWithQuery(query, { page, per_page: perPage }),
    []
  );

  const getSearchResult = useQuery({
    queryKey: searchCache.getSearchPage({ query, page }),
    queryFn: () => fetcher(query, page),
    enabled: query !== '',
    keepPreviousData: true,
  });

  return {
    activePage: page,
    setQuery: handleQueryChange,
    setPage,
    getSearchResult,
  };
};
