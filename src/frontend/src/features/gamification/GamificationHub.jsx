import { useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Leaderboard, Badges, Challenges } from './components'

export default function GamificationHub() {
  const { api } = useAuth()
  const [leaderboard, setLeaderboard] = useState([])
  const [challenges, setChallenges] = useState([])
  const [badges, setBadges] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const [lbRes, chRes, bgRes] = await Promise.all([
        api.get('/gamification/leaderboard'),
        api.get('/gamification/challenges'),
        api.get('/gamification/badges')
      ])
      setLeaderboard(lbRes.data)
      setChallenges(chRes.data)
      setBadges(bgRes.data)
    }
    loadData()
  }, [])

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <div className="col-span-2">
        <Leaderboard data={leaderboard} />
        <Challenges items={challenges} />
      </div>
      <div>
        <Badges items={badges} />
      </div>
    </div>
  )
}