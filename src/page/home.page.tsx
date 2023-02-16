import { debounce, formatNumber } from '@/feature/common';
import {
  RepositoryTag,
  useRepository,
  useRepositoryControl,
} from '@/feature/repository';
import { useSearch } from '@/feature/search';
import { SearchList } from '@/feature/search/components';
import { IconGithub } from '@/feature/ui/icons';
import { StickyBox } from '@/feature/ui/layouts';
import { Pagination } from '@/feature/ui/pagination';
import {
  Box,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import { ChangeEvent, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const MAX_RESULT = 1000;
const PER_PAGE = 20;

export function HomePage() {
  const { activePage, setQuery, setPage, getSearchResult } = useSearch({
    perPage: PER_PAGE,
  });
  const { data, isFetching } = getSearchResult;
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setSearchParams();
      return;
    }
    setSearchParams({ q: e.target.value });
  };

  const { repositories } = useRepository();
  const { removeRepository } = useRepositoryControl();

  useEffect(() => {
    if (!query) return;
    setQuery(query);
  }, [query]);

  return (
    <VStack alignItems={'stretch'} h="100%">
      <StickyBox py={4} mx={-4} px={4} bg="white">
        <FormControl>
          <FormLabel fontSize={'sm'}>
            Search Repository
            {data && `(${formatNumber(data.total_count)})`}
          </FormLabel>
          <InputGroup mb={2}>
            <InputLeftElement pointerEvents="none">
              {isFetching ? <Spinner size="sm" /> : <Icon as={IconGithub} />}
            </InputLeftElement>
            <Input
              placeholder="input repository name"
              defaultValue={query ?? ''}
              onChange={debounce(handleChange, 400)}
            />
          </InputGroup>

          <FormHelperText mb={4}>
            <Text fontSize="xs" fontWeight="light" mb={1}>
              Saved Repository
            </Text>
            <Wrap>
              {Array.from(repositories).map((repo, i) => (
                <WrapItem key="repo">
                  <RepositoryTag tagName={repo} onClose={removeRepository} />
                </WrapItem>
              ))}
            </Wrap>
          </FormHelperText>
        </FormControl>

        {data && (
          <Flex justifyContent="right" width="100%" mb={2}>
            <Pagination
              page={activePage}
              onChange={(page) => setPage(page)}
              total={Math.ceil(
                Math.min(data.total_count, MAX_RESULT) / PER_PAGE
              )}
            />
          </Flex>
        )}
      </StickyBox>

      <Box flex={1}>{data && <SearchList list={data.items} />}</Box>
    </VStack>
  );
}
