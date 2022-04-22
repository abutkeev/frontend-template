import { Alert, Button } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: FC = () => {
  const navigate = useNavigate();
  return (
    <Alert
      severity='error'
      variant='outlined'
      action={
        <Button onClick={() => navigate('/')} variant='outlined'>
          To home
        </Button>
      }
    >
      Page doesn't exist
    </Alert>
  );
};

export default NotFound;
