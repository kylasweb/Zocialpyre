import GamificationHub from '../features/gamification/GamificationHub'
import { TeamHub, SupportHub, FinanceOverview } from '../features'
import CustomizationPanel from './CustomizationPanel'
import PersonalMetrics from '../features/metrics/PersonalMetrics'
import NotificationsPanel from '../notifications/NotificationsPanel'

export default function UserDashboard() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div className="md:col-span-2">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <FinanceOverview />
            <TeamHub />
          </div>
          <PersonalMetrics />
          <GamificationHub />
        </div>
        <div className="space-y-4">
          <SupportHub />
          <NotificationsPanel />
          <CustomizationPanel />
        </div>
      </div>
    </DashboardLayout>
  )
}