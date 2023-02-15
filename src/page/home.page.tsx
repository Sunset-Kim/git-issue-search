import { debounce, formatNumber } from '@/feature/common';
import { useSearch } from '@/feature/search';
import { SearchList } from '@/feature/search/components';
import { IconGithub } from '@/feature/ui/icons';
import { Pagination } from '@/feature/ui/pagination';
import {
  Box,
  Center,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
} from '@chakra-ui/react';

import { ChangeEvent } from 'react';

const MAX_RESULT = 1000;
const PER_PAGE = 20;

export function HomePage() {
  const { activePage, setQuery, setPage, getSearchResult } = useSearch({
    perPage: PER_PAGE,
  });
  const { data, isFetching } = getSearchResult;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') return;
    setQuery(e.target.value);
  };

  return (
    <div>
      <Box py={4} bg="white" position="sticky" top={0} zIndex={999}>
        <FormControl>
          <FormLabel fontSize={'sm'}>
            Search Repository
            {data && `(${formatNumber(data.total_count)})`}
          </FormLabel>
          <InputGroup mb={4}>
            <InputLeftElement pointerEvents="none">
              {isFetching ? <Spinner size="sm" /> : <Icon as={IconGithub} />}
            </InputLeftElement>
            <Input
              placeholder="input repository name"
              onChange={debounce(handleChange, 400)}
            />
          </InputGroup>
        </FormControl>

        <Center width={'100%'} position={'sticky'} top={0} zIndex={999} mb={2}>
          {data && (
            <Pagination
              page={activePage}
              onChange={(page) => setPage(page)}
              total={Math.ceil(
                Math.min(data.total_count, MAX_RESULT) / PER_PAGE
              )}
            />
          )}
        </Center>
      </Box>

      <Box>{data && <SearchList list={data.items} />}</Box>
    </div>
  );
}
