import { Tag, TagCloseButton, TagProps, Text } from '@chakra-ui/react';

type Props = TagProps & {
  tagName: string;
  onClose?: (name: string) => void;
};

export function RepositoryTag({ tagName, onClose, ...props }: Props) {
  return (
    <Tag
      size="lg"
      variant={'solid'}
      colorScheme="linkedin"
      borderRadius="full"
      {...props}
    >
      <Text fontSize="xs">{tagName}</Text>
      {onClose && <TagCloseButton onClick={() => onClose(tagName)} />}
    </Tag>
  );
}
