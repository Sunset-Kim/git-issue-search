import type { SearchResultItem } from '../schema';
import { SearchItem } from './search-item.component';

type Props = {
  list: SearchResultItem[];
};

export function SearchList({ list }: Props) {
  return (
    <ul>
      {list.map((item) => (
        <SearchItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
