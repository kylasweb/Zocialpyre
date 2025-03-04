import React, { useState, useEffect } from 'react';
import { RealTimeChart } from './RealTimeChart';
import { Card, Grid, Typography } from '@mui/material';
import { useWebSocket } from '../../hooks/useWebSocket';

export const RealTimeAnalytics = () => {
  const [kpiData, setKpiData] = useState({
    totalSales: 0,
    activeUsers: 0,
    conversionRate: 0,
    newReferrals: 0
  });

  const [salesTrends, setSalesTrends] = useState([]);
  const [referralData, setReferralData] = useState([]);

  // Connect to WebSocket for real-time updates
  const { data: wsData } = useWebSocket('ws://localhost:8000/ws/analytics');

  useEffect(() => {
    if (wsData) {
      // Update KPIs
      if (wsData.type === 'kpi_update') {
        setKpiData(prev => ({ ...prev, ...wsData.data }));
      }
      // Update sales trends
      else if (wsData.type === 'sales_update') {
        setSalesTrends(prev => [...prev, wsData.data].slice(-50));
      }
      // Update referral data
      else if (wsData.type === 'referral_update') {
        setReferralData(prev => [...prev, wsData.data].slice(-50));
      }
    }
  }, [wsData]);

  return (
    <div className="analytics-dashboard">
      <Grid container spacing={3}>
        {/* KPI Cards */}
        <Grid item xs={3}>
          <Card className="kpi-card">
            <Typography variant="h6">Total Sales</Typography>
            <Typography variant="h4">${kpiData.totalSales.toLocaleString()}</Typography>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className="kpi-card">
            <Typography variant="h6">Active Users</Typography>
            <Typography variant="h4">{kpiData.activeUsers}</Typography>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className="kpi-card">
            <Typography variant="h6">Conversion Rate</Typography>
            <Typography variant="h4">{kpiData.conversionRate}%</Typography>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className="kpi-card">
            <Typography variant="h6">New Referrals</Typography>
            <Typography variant="h4">{kpiData.newReferrals}</Typography>
          </Card>
        </Grid>

        {/* Sales Trends Chart */}
        <Grid item xs={12} md={6}>
          <Card>
            <Typography variant="h6" padding={2}>Sales Trends</Typography>
            <RealTimeChart 
              data={salesTrends} 
              width={600} 
              height={300}
            />
          </Card>
        </Grid>

        {/* Referral Tracking Chart */}
        <Grid item xs={12} md={6}>
          <Card>
            <Typography variant="h6" padding={2}>Referral Activity</Typography>
            <RealTimeChart 
              data={referralData} 
              width={600} 
              height={300}
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};