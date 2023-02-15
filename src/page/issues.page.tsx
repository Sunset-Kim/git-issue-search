import { isNotNullOrUndefined } from '@/feature/common';
import { IssueList, useIssues } from '@/feature/issues';
import { RepositoryList, useRepository } from '@/feature/repository';

export function IssuesPage() {
  const { repositories } = useRepository();
  const repositoriesArr = Array.from(repositories);
  const results = useIssues(repositoriesArr);

  const isLoading = results.some((result) => result.isLoading);
  const data = results
    .flatMap((result) => result.data)
    .filter(isNotNullOrUndefined);

  return (
    <div>
      <RepositoryList list={repositoriesArr} />
      {isLoading && <div>로딩중</div>}
      {!isLoading && data.length > 0 && <IssueList issues={data} />}
    </div>
  );
}
