import { useQueries } from '@tanstack/react-query';
import { useIssueService } from './issue-service.context';
import { issuesCache } from './issues.query';

export const useIssues = (nameList: string[]) => {
  const { service } = useIssueService();

  const issuesQueries = useQueries({
    queries: nameList.map((name) => ({
      queryKey: issuesCache.getIssue({ name }),
      queryFn: () => service.getIssues({ repositoryName: name }),
    })),
  });

  return issuesQueries;
};
