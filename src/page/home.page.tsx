import { SearchInput, SearchList } from '@/feature/search/components';
import { SearchResult, SearchResultItem } from '@/feature/search/schema';
import { useState } from 'react';

export function HomePage() {
  const [result, setResult] = useState<SearchResultItem[] | undefined>(
    undefined
  );

  const handleUpdate = (result: SearchResult) => {
    setResult(result.items);
  };
  return (
    <div>
      <SearchInput onUpdate={handleUpdate} />
      <SearchList list={result} />
    </div>
  );
}
