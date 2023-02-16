import { useToast } from '@chakra-ui/react';
import { PropsWithChildren, useCallback, useState } from 'react';
import { createContext } from '../common';
import debug from '../common/utils/debug-log';
import { LocalStorage } from '../common/utils/local-storage';

const REPOSITORY_KEY = 'repository';
const MAX_LENGTH = 4;

const log = debug('Repository|Context:');

interface RepositoryContext {
  repositories: Set<string>;
}

interface RepositoryControlContext {
  addRepository: (repository: string) => void;
  removeRepository: (repository: string) => void;
  resetAll: () => void;
}

const [RepositoryProvder, useRepository] = createContext<RepositoryContext>({
  strict: true,
  name: 'RepositoryContext',
  errorMessage: 'context is undefined, wrap provider',
});

const [RepositoryControlProvder, useRepositoryControl] =
  createContext<RepositoryControlContext>({
    strict: true,
    name: 'RepositoryContext',
    errorMessage: 'context is undefined, wrap provider',
  });

// hooks
export { useRepository, useRepositoryControl };

// Provider
export function RepositoryContextProvider({ children }: PropsWithChildren) {
  const toast = useToast();
  const repositoryDB = new LocalStorage<Set<string>>(REPOSITORY_KEY, {
    defaultValue: new Set(),
  });

  const [repositories, setRepositories] = useState<Set<string>>(
    () => repositoryDB.getItem() ?? new Set()
  );

  // debug conole
  log(repositories);

  const addRepository = useCallback((repository: string) => {
    if (repositories.size >= MAX_LENGTH) {
      return toast({
        title: `repository max length is ${MAX_LENGTH}`,
        status: 'error',
        position: 'bottom-right',
      });
    }
    const newRepos = new Set(repositories.add(repository));
    repositoryDB.setItem(newRepos);
    setRepositories(newRepos);
  }, []);

  const removeRepository = useCallback((repository: string) => {
    const newRepos = repositories.delete(repository);
    if (newRepos) {
      repositoryDB.setItem(repositories);
      setRepositories(new Set(repositories));
    }
  }, []);

  const resetAll = useCallback(() => {
    repositoryDB.setItem(new Set());
    setRepositories(new Set());
  }, []);

  return (
    <RepositoryProvder value={{ repositories }}>
      <RepositoryControlProvder
        value={{ addRepository, removeRepository, resetAll }}
      >
        {children}
      </RepositoryControlProvder>
    </RepositoryProvder>
  );
}
