import { isNotNullOrUndefined } from '@/feature/common';
import { IssueList, useIssuesQuery } from '@/feature/issues';
import {
  RepositoryTag,
  useRepository,
  useRepositoryControl,
} from '@/feature/repository';
import { REPOSITORIES_COLORS } from '@/feature/repository/repositories-color';
import { StickyBox } from '@/feature/ui/layouts';
import { SimpleMessage } from '@/feature/ui/message';
import { Pagination } from '@/feature/ui/pagination';
import {
  Box,
  Center,
  Flex,
  Select,
  Spinner,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useState } from 'react';

export function IssuesPage() {
  // repository
  const [filter, setFilter] = useState<'acc' | 'desc'>('desc');
  const { repositories } = useRepository();
  const { removeRepository } = useRepositoryControl();
  const repositoriesArr = Array.from(repositories);
  const results = useIssuesQuery(repositoriesArr);
  const isLoading = results.some((result) => result.isLoading);

  const data =
    results &&
    results
      .flatMap((result) => result.data)
      .filter(isNotNullOrUndefined)
      .sort((issue1, issue2) => {
        return filter === 'acc'
          ? dayjs(issue1.created_at).valueOf() -
              dayjs(issue2.created_at).valueOf()
          : dayjs(issue2.created_at).valueOf() -
              dayjs(issue1.created_at).valueOf();
      });

  // pagenation
  const [page, setPage] = useState(1);
  const PER_PAGE = 20;
  const totalData = data?.length;
  const totalPage = Math.ceil(totalData / PER_PAGE);
  const issues = data.slice((page - 1) * PER_PAGE, page * PER_PAGE - 1);

  if (repositoriesArr.length === 0) {
    return (
      <SimpleMessage>
        <Text>등록된 Repository가 없습니다</Text>
      </SimpleMessage>
    );
  }

  return (
    <VStack h="100%" alignItems="stretch">
      {isLoading && (
        <Center h="100%">
          <Spinner />
        </Center>
      )}

      {data && !isLoading && (
        <Box flex={1}>
          <StickyBox bg="white" py="4">
            <Box mb="2">
              {repositoriesArr.length > 0 && (
                <Wrap>
                  {repositoriesArr.map((repo, i) => (
                    <WrapItem key={repo}>
                      <RepositoryTag
                        variant="subtle"
                        colorScheme={REPOSITORIES_COLORS[i]}
                        tagName={repo}
                        onClose={removeRepository}
                      />
                    </WrapItem>
                  ))}
                </Wrap>
              )}
            </Box>

            <Flex gap={4} justifyContent="space-between" alignItems="center">
              <Select
                borderRadius="lg"
                size="sm"
                value={filter}
                onChange={(e) => setFilter(e.target.value as 'desc' | 'acc')}
              >
                <option selected value="desc">
                  최신순
                </option>
                <option value="acc">오래된순</option>
              </Select>
              <Pagination
                total={totalPage}
                page={page}
                onChange={(page) => setPage(page)}
              />
            </Flex>
          </StickyBox>

          <IssueList issues={issues} />
        </Box>
      )}
    </VStack>
  );
}
