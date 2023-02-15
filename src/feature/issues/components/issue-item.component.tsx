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
  Tag,
  Text,
} from '@chakra-ui/react';
import type { Issue } from '../schema';

type Props = {
  issue: Issue & { repositoryName?: string };
};

export function IssueItem({ issue }: Props) {
  const { title, number, html_url, user } = issue;
  const { avatar_url, login } = user;
  return (
    <Card w="100%">
      <CardHeader pb={0}>
        <Tag>{issue?.repositoryName}</Tag>

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
