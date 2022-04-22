import { FC, PropsWithChildren } from 'react';
import Alert from '@mui/material/Alert';
import { Button } from '@mui/material';

interface Props {
  error?: boolean | string | null;
  onReload?(): void;
  reloadText?: string;
}

const ErrorWrapper: FC<PropsWithChildren<Props>> = ({ children, error, onReload, reloadText }) => {
  const message = typeof error === 'string' ? error : 'Unknown error';
  return (
    <>
      {error ? (
        <Alert
          severity='error'
          variant='outlined'
          action={
            <Button
              variant='outlined'
              color='primary'
              onClick={() => (onReload ? onReload() : document.location.reload())}
            >
              {reloadText ?? 'Reload page'}
            </Button>
          }
        >
          {message}
        </Alert>
      ) : (
        children
      )}
    </>
  );
};

export default ErrorWrapper;
