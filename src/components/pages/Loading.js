import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Loading() {
  return <Box sx={{ width: '60%' }}>
    <h6>LOADING</h6>
    <LinearProgress />
  </Box>
}
