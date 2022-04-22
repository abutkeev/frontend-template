import { FC, useEffect, useState } from 'react';
import { Box, CircularProgress, Collapse, Fade } from '@mui/material';

interface Props {
  size?: number;
}

const PageLoadingIndicator: FC<Props> = ({ size = 60 }) => {
  const [openDelayed, setOpenDelayed] = useState(false);
  useEffect(() => {
    if (!openDelayed) {
      const timerId = setTimeout(() => setOpenDelayed(true), 200);
      return () => clearTimeout(timerId);
    }
  }, [openDelayed]);
  return (
    <Box
      sx={{
        alignItems: 'center',
        height: '100%',
        display: 'flex',
      }}
    >
      <Collapse in={openDelayed} unmountOnExit>
        <Fade in={openDelayed}>
          <CircularProgress size={size} />
        </Fade>
      </Collapse>
    </Box>
  );
};

export default PageLoadingIndicator;
