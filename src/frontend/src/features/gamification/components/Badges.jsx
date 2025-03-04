import { motion } from 'framer-motion'
import { useBadges } from '../hooks/useBadges'

export const Badges = () => {
  const { badges, loading } = useBadges()

  return (
    <div className="badges-grid grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map(badge => (
        <motion.div
          key={badge.id}
          className="badge-card bg-white rounded-lg p-4 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          <img src={badge.icon} alt={badge.name} className="w-16 h-16 mx-auto" />
          <h4 className="text-lg font-bold mt-2">{badge.name}</h4>
          <p className="text-sm text-gray-600">{badge.description}</p>
          <div className="mt-2 text-xs text-blue-600">
            {badge.earned ? 'Earned' : `${badge.progress}% Complete`}
          </div>
        </motion.div>
      ))}
    </div>
  )
}