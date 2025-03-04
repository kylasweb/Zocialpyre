import React from 'react'
import { Box, Grid, Paper, Typography } from '@mui/material'

export const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              mb: 3,
              borderRadius: 3,
              background: 'linear-gradient(45deg, #2196f3 30%, #64b5f6 90%)',
              color: 'white'
            }}
          >
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
              Welcome to Zocialpyre
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.9 }}>
              Your social network analytics dashboard
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              height: '100%',
              borderRadius: 3,
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)'
              }
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 600, color: 'primary.main', mb: 2 }}
            >
              Network Overview
            </Typography>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'grey.50',
                borderRadius: 2,
                p: 3
              }}
            >
              {/* Network visualization will be added here */}
              <Typography color="text.secondary">
                Network visualization coming soon
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              height: '100%',
              borderRadius: 3,
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)'
              }
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 600, color: 'primary.main', mb: 2 }}
            >
              Analytics Summary
            </Typography>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'grey.50',
                borderRadius: 2,
                p: 3
              }}
            >
              {/* Analytics charts will be added here */}
              <Typography color="text.secondary">
                Analytics charts coming soon
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}