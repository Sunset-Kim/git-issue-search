import { SimpleMessage } from '@/feature/ui';
import { Text, VStack } from '@chakra-ui/react';
import type { SearchResultItem } from '../schema';
import { SearchItem } from './search-item.component';

type Props = {
  list: SearchResultItem[];
};

export function SearchList({ list }: Props) {
  if (list.length === 0) {
    return (
      <SimpleMessage>
        <Text fontWeight="bold">조회된 결과가 없습니다 🥲</Text>
      </SimpleMessage>
    );
  }
  return (
    <VStack as="ul">
      {list.map((item) => (
        <SearchItem key={item.id} item={item} />
      ))}
    </VStack>
  );
}
