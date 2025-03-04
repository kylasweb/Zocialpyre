import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <img src="/logo.svg" alt="Logo" className="h-12" />
          <div className="space-x-4">
            <Link to="/login" className="text-white hover:text-blue-300">Login</Link>
            <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Transform Your Network Marketing Journey
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            Advanced tools, real-time analytics, and seamless team management
          </p>
          <Link
            to="/register"
            className="bg-blue-500 text-white px-8 py-4 rounded-lg text-xl hover:bg-blue-600 transition-colors">
            Join Now
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-blue-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

const features = [
  {
    title: 'Smart Binary Matrix',
    description: 'Advanced network visualization with real-time updates'
  },
  {
    title: 'Gamification',
    description: 'Engage your team with challenges, rewards, and achievements'
  },
  {
    title: 'Real-time Analytics',
    description: 'Track performance and growth with detailed insights'
  }
]