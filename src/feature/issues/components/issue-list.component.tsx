import { SimpleMessage } from '@/feature/ui/message';
import { Text, VStack } from '@chakra-ui/react';
import { Issue } from '../schema';
import { IssueItem } from './issue-item.component';

type Props = {
  issues: (Issue & { repositoryName?: string })[];
};

export function IssueList({ issues }: Props) {
  if (issues.length === 0) {
    return (
      <SimpleMessage>
        <Text fontWeight={'semibold'}>조회된 이슈가 없습니다</Text>
      </SimpleMessage>
    );
  }

  return (
    <VStack as="ul">
      {issues.map((issue) => (
        <IssueItem key={issue.node_id} issue={issue} />
      ))}
    </VStack>
  );
}
