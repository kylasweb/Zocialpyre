import React from 'react';
import { Box, Card, CardContent, Typography, Grid, LinearProgress } from '@mui/material';
import { TrendingUp, Star, EmojiEvents, Timeline } from '@mui/icons-material';

const MetricCard = ({ icon, title, value, progress, color }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        {icon}
        <Typography variant="h6" sx={{ ml: 1 }}>
          {title}
        </Typography>
      </Box>
      <Typography variant="h4" sx={{ mb: 1 }}>
        {value}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 8,
          borderRadius: 5,
          bgcolor: `${color}.light`,
          '& .MuiLinearProgress-bar': {
            borderRadius: 5,
            backgroundColor: `${color}.main`,
          },
        }}
      />
    </CardContent>
  </Card>
);

export const PerformanceMetrics = () => {
  const metrics = [
    {
      icon: <TrendingUp color="primary" />,
      title: 'Sales Performance',
      value: '$12,845',
      progress: 75,
      color: 'primary'
    },
    {
      icon: <Star color="warning" />,
      title: 'Achievement Points',
      value: '2,584',
      progress: 65,
      color: 'warning'
    },
    {
      icon: <EmojiEvents color="success" />,
      title: 'Current Rank',
      value: 'Gold',
      progress: 85,
      color: 'success'
    },
    {
      icon: <Timeline color="info" />,
      title: 'Network Growth',
      value: '+45%',
      progress: 45,
      color: 'info'
    }
  ];

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Performance Overview
      </Typography>
      <Grid container spacing={3}>
        {metrics.map((metric, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <MetricCard {...metric} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};