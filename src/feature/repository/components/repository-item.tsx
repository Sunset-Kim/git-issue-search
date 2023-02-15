import { useRepositoryControl } from '../repository.context';

type Props = {
  name: string;
};

export function RepositoryItem({ name }: Props) {
  const { removeRepository } = useRepositoryControl();

  const handleClick = (repositoryName: string) => {
    removeRepository(repositoryName);
  };
  return (
    <li>
      <span>{name}</span>
      <button type="button" onClick={() => handleClick(name)}>
        삭제
      </button>
    </li>
  );
}
