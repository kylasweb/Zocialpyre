import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Sample data - replace with actual data from your backend
const performanceData = [
  { month: 'Jan', sales: 4000, recruitment: 10, retention: 90 },
  { month: 'Feb', sales: 3000, recruitment: 8, retention: 85 },
  { month: 'Mar', sales: 5000, recruitment: 12, retention: 88 },
  { month: 'Apr', sales: 4500, recruitment: 15, retention: 92 },
  { month: 'May', sales: 6000, recruitment: 20, retention: 95 },
];

const LeaderDashboard = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Team Performance Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        {/* Team Performance Metrics */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Team Performance Trends
              </Typography>
              <LineChart width={700} height={300} data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="sales" stroke="#8884d8" />
                <Line yAxisId="left" type="monotone" dataKey="recruitment" stroke="#82ca9d" />
                <Line yAxisId="right" type="monotone" dataKey="retention" stroke="#ffc658" />
              </LineChart>
            </CardContent>
          </Card>
        </Grid>

        {/* Team Stats Summary */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Team Size
                  </Typography>
                  <Typography variant="h4">
                    25
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Average Performance
                  </Typography>
                  <Typography variant="h4">
                    92%
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Active Projects
                  </Typography>
                  <Typography variant="h4">
                    8
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LeaderDashboard;