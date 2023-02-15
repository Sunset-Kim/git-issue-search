import { Tag, TagCloseButton, Text, WrapItem } from '@chakra-ui/react';
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
    <WrapItem as="li" sx={{ listStyle: 'none' }}>
      <Tag
        size="lg"
        variant={'solid'}
        colorScheme="linkedin"
        borderRadius="full"
      >
        <Text fontSize="xs">{name}</Text>
        <TagCloseButton onClick={() => handleClick(name)} />
      </Tag>
    </WrapItem>
  );
}
