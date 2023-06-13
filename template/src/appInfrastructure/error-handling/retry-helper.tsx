import * as React from 'react';
import { ComponentType, lazy, PropsWithChildren, Suspense, useCallback, useMemo, useState } from 'react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundaryFallBack } from './ErrorBoundary.component';
import { ErrorBoundaryWidget } from './ErrorBoundary.widget';
import { Loader } from '../../components/loaders/loader.component';
import i18n from 'i18next';

/**
 * Helper which retries to run a given async function if it is failed.
 */
export function retry<T>(fn: () => Promise<T>, retriesLeft = 2, intervalInMillis = 1000): Promise<T> {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch(reason => {
        if (retriesLeft === 0) {
          reject(reason);
          return;
        }

        setTimeout(() => {
          retry<T>(fn, retriesLeft - 1, intervalInMillis).then(resolve, reject);
        }, intervalInMillis);
      });
  });
}

/**
 * Helper which retries to load a lazy component if it is failed.
 * Wrapped in ErrorBoundary to show an error and reload if something bad happens
 */
export function lazyRetry<T extends ComponentType<any>>(factory: () => Promise<{ default: T }>): T {
  const RetryWrapper = (props: any) => {
    const [loading, setLoading] = useState(true);
    const resetError = useCallback(() => setLoading(true), []);
    const LazyComponent = useMemo(
      () =>
        lazy(() =>
          factory().catch(e => {
            setLoading(false);
            return {
              default: function Fallback() {
                return <ErrorBoundaryFallBack resetError={resetError} error={e} componentStack={null} eventId={null} />;
              },
            } as any;
          })
        ),
      [factory, loading]
    );
    return (
      <QuerySuspenseErrorWrapper>
        <LazyComponent {...props} />
      </QuerySuspenseErrorWrapper>
    );
  };

  return RetryWrapper as any;
}

export const QuerySuspenseErrorWrapper: React.FC<PropsWithChildren<{ reset?: () => void }>> = props => {
  const result: any = (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundaryFallBack onClick={reset}>
          <Suspense fallback={<Loader inProgress={true} text={i18n.t('Common_loading')} />}>{props.children}</Suspense>
        </ErrorBoundaryFallBack>
      )}
    </QueryErrorResetBoundary>
  );
  return result;
};
