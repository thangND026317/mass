import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Loading() {
  return <div className="hero-container-other">
    <Box sx={{ width: '60%' }}>
      <h6>LOADING</h6>
      <LinearProgress />
    </Box>
  </div>
}
