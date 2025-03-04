import React from 'react';
import { DashboardLayout } from '../layouts/DashboardLayout';
import BinaryMatrixVisualization from '../features/BinaryMatrixVisualization';
import { RealTimeChart } from '../features/analytics/RealTimeChart';
import { SponsorManagement } from '../features/sponsor/SponsorManagement';
import { useAuth } from '../contexts/AuthContext';

export default function AdminDashboard() {
  const { api } = useAuth()
  const [matrixData, setMatrixData] = useState([])
  const [analyticsData, setAnalyticsData] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const [matrixRes, analyticsRes] = await Promise.all([
        api.get('/network/matrix'),
        api.get('/analytics/realtime')
      ])
      setMatrixData(matrixRes.data)
      setAnalyticsData(analyticsRes.data)
    }
    loadData()
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
      </div>
    </DashboardLayout>
  )
}