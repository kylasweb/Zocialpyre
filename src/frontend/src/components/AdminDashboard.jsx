import { useState } from 'react'
import { RealTimeAnalytics } from '../features/analytics'
import { UserManagement } from '../features/users'
import { FinanceManagement } from '../features/finance'
import { BinaryMatrixVisualization } from '../features/BinaryMatrixVisualization'
import { FeatureManager } from '../features/admin'
import { Box, Paper, Tabs, Tab, useTheme } from '@mui/material'
import { Analytics, People, AccountBalance, Hub, Settings } from '@mui/icons-material'

export const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('analytics')

  const renderContent = () => {
    switch (activeTab) {
      case 'analytics':
        return <RealTimeAnalytics />
      case 'users':
        return <UserManagement />
      case 'finance':
        return <FinanceManagement />
      case 'network':
        return <BinaryMatrixVisualization />
      case 'features':
        return <FeatureManager />
      default:
        return <RealTimeAnalytics />
    }
  }

  const theme = useTheme()

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      p: 3,
      minHeight: '100vh',
      bgcolor: theme.palette.background.default
    }}>
      <Paper
        elevation={0}
        sx={{
          borderRadius: 2,
          overflow: 'hidden',
          bgcolor: theme.palette.background.paper
        }}
      >
        <Tabs
          value={activeTab}
          onChange={(e, newValue) => setActiveTab(newValue)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            px: 2,
            '& .MuiTab-root': {
              minHeight: 64,
              color: theme.palette.text.secondary
            }
          }}
        >
          <Tab icon={<Analytics />} label="Analytics" value="analytics" />
          <Tab icon={<People />} label="Users" value="users" />
          <Tab icon={<AccountBalance />} label="Finance" value="finance" />
          <Tab icon={<Hub />} label="Network" value="network" />
          <Tab icon={<Settings />} label="Features" value="features" />
        </Tabs>
      </Paper>
      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: 2,
          flexGrow: 1,
          bgcolor: theme.palette.background.paper
        }}
      >
        {renderContent()}
      </Paper>
    </Box>
  )
}