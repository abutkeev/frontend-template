import { FC, PropsWithChildren } from 'react';
import PageLoadingIndicator from './PageLoadingIndicator';
import ErrorWrapper from './ErrorWrapper';

interface Props {
  loading?: boolean;
  error?: boolean | string | null;
  onReload?(): void;
  reloadText?: string;
  loadingIndicatorSize?: number;
}

const LoadingWrapper: FC<PropsWithChildren<Props>> = ({
  children,
  loading,
  error,
  onReload,
  reloadText,
  loadingIndicatorSize,
}) => {
  return (
    <ErrorWrapper error={error} onReload={onReload} reloadText={reloadText}>
      {loading ? <PageLoadingIndicator size={loadingIndicatorSize} /> : children ? children : null}
    </ErrorWrapper>
  );
};

export default LoadingWrapper;
