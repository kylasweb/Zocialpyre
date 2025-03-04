import { useSpring, animated } from '@react-spring/web'
import { useLeaderboard } from '../hooks/useLeaderboard'

export const Leaderboard = () => {
  const { data, loading } = useLeaderboard()
  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { tension: 210, friction: 20 }
  })

  return (
    <animated.div style={springs} className="leaderboard-container">
      <div className="leaderboard-header">
        <h3>Real-Time Rankings</h3>
        <span className="badge">Live Updates</span>
      </div>
      
      {data.map((user, index) => (
        <div key={user.id} className="leaderboard-item">
          <div className="rank-badge">
            <span>#{index + 1}</span>
            <div className="progress-ring" />
          </div>
          <div className="user-info">
            <h4>{user.username}</h4>
            <p>{user.team} Members</p>
          </div>
          <div className="points">
            {user.points.toLocaleString()} XP
            <div className="daily-change">
              +{user.dailyChange}% <span className="arrow">↑</span>
            </div>
          </div>
        </div>
      ))}
      
      {loading && <div className="shimmer-loader" />}
    </animated.div>
  )
}