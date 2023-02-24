import { formatDate } from '@/feature/common';
import { RepositoryTag, useRepository } from '@/feature/repository';
import { REPOSITORIES_COLORS } from '@/feature/repository/repositories-color';
import { GithubProfile } from '@/feature/ui';
import { LinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Card,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  HStack,
  Link,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import type { Issue } from '../schema';

type Props = {
  issue: Issue & { repositoryName?: string };
};

export function IssueItem({ issue }: Props) {
  const { repositories } = useRepository();
  const {
    title,
    number,
    html_url,
    user,
    repositoryName,
    created_at,
    closed_at,
    updated_at,
  } = issue;
  const { avatar_url, login } = user;
  const matchedIndex = [...repositories].findIndex(
    (name) => name === repositoryName
  );
  return (
    <Card w="100%">
      <CardHeader pb={0}>
        {repositoryName && (
          <RepositoryTag
            mb="2"
            variant="subtle"
            tagName={repositoryName}
            colorScheme={
              matchedIndex === -1 ? 'gray' : REPOSITORIES_COLORS[matchedIndex]
            }
          />
        )}

        <Flex gap={2} justifyContent="space-between" alignItems="center">
          <Heading as="h4" size="sm" flex={1}>
            <Text as="span" color="linkedin.500" mr={2}>
              #{number}
            </Text>
            {title}
          </Heading>

          <Text fontSize={'xs'}>{formatDate(created_at)}</Text>
        </Flex>
      </CardHeader>

      <CardFooter>
        <HStack
          divider={<StackDivider />}
          wrap="wrap"
          w="100%"
          py={2}
          px={4}
          gap={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <GithubProfile imgUrl={avatar_url} name={login} />
          <Box>
            <Text fontSize="sm">최종업데이트</Text>
            <Text fontSize="sm">{formatDate(updated_at)}</Text>
          </Box>

          <Button
            leftIcon={<LinkIcon />}
            size="sm"
            as={Link}
            href={html_url}
            target="_blank"
            isExternal
          >
            Issue 바로가기
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
}
