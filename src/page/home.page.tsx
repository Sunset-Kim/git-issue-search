import { debounce } from '@/feature/common';
import { useSearch } from '@/feature/search';
import { SearchList } from '@/feature/search/components';
import { ChangeEvent } from 'react';

export function HomePage() {
  const { setQuery, setPage, getSearchResult } = useSearch();

  const { data, isLoading } = getSearchResult;

  const handleUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') return;
    setQuery(e.target.value);
  };

  return (
    <div>
      <button onClick={() => setPage((prev) => prev + 1)}>next</button>
      <input onChange={debounce(handleUpdate, 400)} />

      {isLoading && <div>로딩중</div>}
      {data && <SearchList list={data.items} />}
    </div>
  );
}
