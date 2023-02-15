import { PropsWithChildren } from 'react';
import { createContext, githubAxios } from '../common';
import { IssueService } from './issue.service';

interface IssueServiceContext {
  service: IssueService;
}

const [IssueServiceContextProvider, useIssueService] =
  createContext<IssueServiceContext>({
    strict: true,
    name: 'IssueServiceContext',
    errorMessage: 'IssueService provider is undefined',
  });

export function IssueServiceProvider({ children }: PropsWithChildren) {
  const service = new IssueService(githubAxios);

  return (
    <IssueServiceContextProvider value={{ service }}>
      {children}
    </IssueServiceContextProvider>
  );
}

export { useIssueService };
