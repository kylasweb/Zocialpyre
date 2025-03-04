import React from 'react';
import { DashboardLayout } from '../layouts/DashboardLayout';
import BinaryMatrixVisualization from '../features/BinaryMatrixVisualization';
import { RealTimeChart } from '../features/analytics/RealTimeChart';
import { SponsorManagement } from '../features/sponsor/SponsorManagement';
import { InvestmentPlans, PoolManagement } from '../features/investment';
import { useAuth } from '../contexts/AuthContext';

export default function AdminDashboard() {
  const { api } = useAuth()
  const [matrixData, setMatrixData] = useState([])
  const [analyticsData, setAnalyticsData] = useState([])
  const [investmentPlans, setInvestmentPlans] = useState([])
  const [investmentPools, setInvestmentPools] = useState([])

  useEffect(() => {
    const loadData = async () => {
      try {
        const [matrixRes, analyticsRes, plansRes, poolsRes] = await Promise.all([
          api.get('/network/matrix'),
          api.get('/analytics/realtime'),
          api.get('/investment/plans'),
          api.get('/investment/pools')
        ]);
        setMatrixData(matrixRes.data)
        setAnalyticsData(analyticsRes.data)
        setInvestmentPlans(plansRes.data)
        setInvestmentPools(poolsRes.data)
      } catch (error) {
        console.error('Data refresh error:', error)
      }
    }
    
    loadData()
    const interval = setInterval(loadData, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <DashboardLayout>
      <div className="grid grid-cols-2 gap-4 h-screen p-4">
        <div className="col-span-2 h-96">
          <BinaryMatrixVisualization data={matrixData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <RealTimeChart data={analyticsData} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <SponsorManagement />
        </div>
        <div className="col-span-2 space-y-4">
          <InvestmentPlans plans={investmentPlans} />
          <PoolManagement pools={investmentPools} />
        </div>
      </div>
    </DashboardLayout>
  )
}