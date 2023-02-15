import type { Issue } from '../schema';

type Props = {
  issue: Issue;
};

export function IssueItem({ issue }: Props) {
  return (
    <li>
      <span>{issue.title}</span>
      <a rel="noreferrer" href={issue.html_url} target="_blank">
        Issue 바로가기
      </a>
    </li>
  );
}
