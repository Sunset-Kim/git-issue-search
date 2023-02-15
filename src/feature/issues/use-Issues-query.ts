import { useQueries } from '@tanstack/react-query';
import { useIssueService } from './issue-service.context';
import { issuesCache } from './issues.query';
import { Issue } from './schema';

export const useIssuesQuery = (nameList: string[]) => {
  const { service } = useIssueService();

  const issuesQueries = useQueries({
    queries: nameList.map((name) => ({
      queryKey: issuesCache.getIssue({ name }),
      queryFn: () => service.getIssues({ repositoryName: name }),
      select: (response: Issue[]) => {
        return response.map(
          (data) =>
            ({ ...data, repositoryName: name } as Issue & {
              repositoryName: string;
            })
        );
      },
    })),
  });

  return issuesQueries;
};
