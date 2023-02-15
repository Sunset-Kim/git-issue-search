import { isNotNullOrUndefined } from '@/feature/common';
import { IssueList, useIssuesQuery } from '@/feature/issues';
import { useRepository } from '@/feature/repository';

export function IssuesPage() {
  const { repositories } = useRepository();
  const repositoriesArr = Array.from(repositories);
  const results = useIssuesQuery(repositoriesArr);

  const isLoading = results.some((result) => result.isLoading);
  const data = results
    .flatMap((result) => result.data)
    .filter(isNotNullOrUndefined);

  return (
    <div>
      {isLoading && <div>로딩중</div>}
      {!isLoading && data.length > 0 && <IssueList issues={data} />}
    </div>
  );
}
