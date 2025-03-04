import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import BinaryMatrix from './BinaryMatrix';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  // Sample data - Replace with real data from API
  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales Trend',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const referralData = {
    labels: ['Direct', 'Level 1', 'Level 2', 'Level 3'],
    datasets: [
      {
        data: [300, 50, 100, 80],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
        ],
      },
    ],
  };

  const kpiData = {
    labels: ['Active Users', 'New Signups', 'Conversions'],
    datasets: [
      {
        label: 'Monthly KPIs',
        data: [65, 59, 80],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={3}>
        {/* Sales Trend */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Sales Trend
            </Typography>
            <Line data={salesData} options={{ responsive: true }} />
          </Paper>
        </Grid>

        {/* Referral Distribution */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Referral Distribution
            </Typography>
            <Doughnut data={referralData} options={{ responsive: true }} />
          </Paper>
        </Grid>

        {/* Key Performance Indicators */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Key Performance Indicators
            </Typography>
            <Bar data={kpiData} options={{ responsive: true }} />
          </Paper>
        </Grid>

        {/* Binary Matrix Network */}
        <Grid item xs={12} md={8}>
          <BinaryMatrix />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;