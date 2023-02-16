import { RepositoryTag, useRepository } from '@/feature/repository';
import { REPOSITORIES_COLORS } from '@/feature/repository/repositories-color';
import { GithubProfile } from '@/feature/ui';
import { LinkIcon } from '@chakra-ui/icons';
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react';
import type { Issue } from '../schema';

type Props = {
  issue: Issue & { repositoryName?: string };
};

export function IssueItem({ issue }: Props) {
  const { repositories } = useRepository();
  const { title, number, html_url, user, repositoryName } = issue;
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

        <Heading as="h4" size="sm">
          <Text as="span" color="linkedin.500" mr={2}>
            #{number}
          </Text>
          {title}
        </Heading>
      </CardHeader>

      <CardFooter>
        <Flex
          wrap="wrap"
          w="100%"
          py={2}
          px={4}
          gap={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <GithubProfile imgUrl={avatar_url} name={login} />
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
        </Flex>
      </CardFooter>
    </Card>
  );
}
