export const ISSUES_QUERY_KEY = 'issues';

export const issuesCache = {
  getIssue: ({ name }: { name: string }) => [ISSUES_QUERY_KEY, name],
};
