import { RepositoryItem } from './repository-item';

type Props = {
  list: string[];
};

export function RepositoryList({ list }: Props) {
  if (list.length === 0) {
    return <div>아직 레포지토리가 추가되지 않았습니다</div>;
  }

  return (
    <ul>
      {list.map((item) => (
        <RepositoryItem key={item} name={item} />
      ))}
    </ul>
  );
}
