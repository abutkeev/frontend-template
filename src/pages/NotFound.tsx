import { Alert } from '@mui/material';
import { FC } from 'react';

const NotFound: FC = () => {
    return (
        <Alert severity='error' variant='outlined'>
            Page doesn't exist
        </Alert>
    );
};

export default NotFound;
