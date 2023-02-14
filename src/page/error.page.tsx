import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      {isRouteErrorResponse(error) && (
        <i>
          {error.status} | {error.statusText}
        </i>
      )}
      {error instanceof Error && <i>{error.message}</i>}
    </div>
  );
}
