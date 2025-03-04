import { useState } from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const mockData = [
  { name: 'Jan', sales: 4000, referrals: 2400 },
  { name: 'Feb', sales: 3000, referrals: 1398 },
  { name: 'Mar', sales: 2000, referrals: 9800 },
  { name: 'Apr', sales: 2780, referrals: 3908 },
  { name: 'May', sales: 1890, referrals: 4800 },
  { name: 'Jun', sales: 2390, referrals: 3800 },
];

const Dashboard = () => {
  const [data] = useState(mockData);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Sales Trends Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Sales & Referral Trends
            </Typography>
            <ResponsiveContainer>
              <LineChart
                data={data}
                margin={{
                  top: 16,
                  right: 16,
                  bottom: 0,
                  left: 24,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="referrals" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* KPI Summary */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 240,
            }}
          >
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              KPI Summary
            </Typography>
            <Typography component="p" variant="h4">
              $3,024.00
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Total Sales (Current Month)
            </Typography>
            <Typography component="p" variant="h4">
              245
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Total Referrals
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;