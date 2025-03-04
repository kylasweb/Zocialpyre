import { motion } from 'framer-motion'
import { useChallenges } from '../hooks/useChallenges'

export const Challenges = () => {
  const { challenges, updateProgress } = useChallenges()

  return (
    <div className="challenges-container">
      {challenges.map(challenge => (
        <motion.div
          key={challenge.id}
          className="challenge-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}>
          <div className="challenge-header">
            <h3>{challenge.title}</h3>
            <span className="reward">{challenge.reward} tokens</span>
          </div>
          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${challenge.progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <button
            onClick={() => updateProgress(challenge.id)}
            disabled={challenge.completed}
            className="claim-button">
            {challenge.completed ? 'Completed' : 'Claim Reward'}
          </button>
        </motion.div>
      ))}
    </div>
  )
}