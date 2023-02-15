import type { Issue } from '../schema';
import { IssueItem } from './issue-item.component';

type Props = {
  issues: Issue[];
};

export function IssueList({ issues }: Props) {
  return (
    <ul>
      {issues.map((issue) => (
        <IssueItem key={issue.node_id} issue={issue} />
      ))}
    </ul>
  );
}
