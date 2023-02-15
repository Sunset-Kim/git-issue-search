import { useRepositoryControl } from '@/feature/repository';
import { SearchResultItem } from '../schema';

type Props = {
  item: SearchResultItem;
};

export function SearchItem({ item }: Props) {
  const { addRepository } = useRepositoryControl();
  const {
    name,
    full_name,
    private: isPrivate,
    owner,
    html_url,
    description,
    forks,
    has_issues,
    open_issues,
    created_at,
    updated_at,
    pushed_at,
    language,
  } = item;

  const { avatar_url, login } = owner;

  return (
    <div>
      <button onClick={() => addRepository(full_name)}>추가</button>
      {full_name}
      {html_url}
      {description}
      {forks}
      {has_issues}
      {open_issues}
      {created_at}
      <div style={{ width: '100px' }}>
        <img src={avatar_url} alt={login} />
        <span>{login}</span>
      </div>
    </div>
  );
}
