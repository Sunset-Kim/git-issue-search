import { createContext } from '@/feature/common/utils';
import { PropsWithChildren } from 'react';
import { githubAxios } from '../common';
import { SearchService } from './search.service';

const [ServiceProvider, useSearchService] = createContext<SearchService>({
  strict: true,
  name: 'SearchServiceContext',
});

export function SearchServiceProvider({ children }: PropsWithChildren) {
  const searchService = new SearchService(githubAxios);

  return <ServiceProvider value={searchService}>{children}</ServiceProvider>;
}

export { useSearchService };
