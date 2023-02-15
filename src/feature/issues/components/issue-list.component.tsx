import { VStack } from '@chakra-ui/react';
import { Issue } from '../schema';
import { IssueItem } from './issue-item.component';

type Props = {
  issues: (Issue & { repositoryName?: string })[];
};

export function IssueList({ issues }: Props) {
  return (
    <VStack as="ul">
      {issues.map((issue) => (
        <IssueItem key={issue.node_id} issue={issue} />
      ))}
    </VStack>
  );
}
