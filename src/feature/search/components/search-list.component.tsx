import type { SearchResultItem } from '../schema';
import { SearchItem } from './search-item.component';

type Props = {
  list?: SearchResultItem[];
};

export function SearchList({ list }: Props) {
  if (!list || list.length === 0) {
    return <div>검색결과가 없습니다</div>;
  }

  return (
    <ul>
      {list.map((item) => (
        <SearchItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
