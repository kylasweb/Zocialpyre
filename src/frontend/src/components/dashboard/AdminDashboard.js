import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Analytics from './Analytics';

const AdminDashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1">
            Admin Dashboard
          </Typography>
        </Grid>
        
        {/* Analytics Dashboard */}
        <Grid item xs={12}>
          <Analytics />
        </Grid>
        
        {/* Binary Matrix Visualization */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2, height: '400px' }}>
            <Typography variant="h6">Binary Matrix</Typography>
            {/* Add visualization component */}
          </Paper>
        </Grid>
        
        {/* Feature Manager */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Feature Manager</Typography>
            {/* Add feature toggle component */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;