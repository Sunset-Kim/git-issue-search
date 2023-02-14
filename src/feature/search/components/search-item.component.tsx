import { SearchResultItem } from '../schema';

type Props = {
  item: SearchResultItem;
};

export function SearchItem({ item }: Props) {
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
      {full_name}
      {html_url}
      {description}
      {forks}
      {has_issues}
      {open_issues}
      {created_at}
      <div>
        <img src={avatar_url} alt={login} />
        <span>{login}</span>
      </div>
    </div>
  );
}
