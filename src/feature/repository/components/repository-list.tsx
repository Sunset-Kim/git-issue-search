import { Text, Wrap } from '@chakra-ui/react';
import { useRepository } from '../repository.context';
import { RepositoryItem } from './repository-item';

type Props = {
  list?: string[];
};

export function RepositoryList({ list }: Props) {
  const { repositories } = useRepository();

  const repositoryList = list || Array.from(repositories);

  if (repositoryList.length === 0) {
    return <div>아직 레포지토리가 추가되지 않았습니다</div>;
  }

  return (
    <div>
      <Text as="p" mb={2}>
        추가된 레포지토리
      </Text>
      <Wrap as="ul">
        {repositoryList.map((item) => (
          <RepositoryItem key={item} name={item} />
        ))}
      </Wrap>
    </div>
  );
}
