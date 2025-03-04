import { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'

export const FeatureManager = () => {
  const [features, setFeatures] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetchFeatures()
  }, [])

  const fetchFeatures = async () => {
    try {
      const response = await fetch('/api/admin/features')
      const data = await response.json()
      setFeatures(data)
    } catch (error) {
      console.error('Failed to fetch features:', error)
      toast.error('Failed to load features')
    } finally {
      setLoading(false)
    }
  }

  const toggleFeature = async (featureId) => {
    try {
      const response = await fetch(`/api/admin/features/${featureId}/toggle`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const updatedFeature = await response.json()
      setFeatures(prev =>
        prev.map(feature =>
          feature.id === featureId ? updatedFeature : feature
        )
      )
      toast.success(`${updatedFeature.name} has been ${updatedFeature.enabled ? 'enabled' : 'disabled'}`)
    } catch (error) {
      console.error('Failed to toggle feature:', error)
      toast.error('Failed to update feature')
    }
  }

  const addNewFeature = async (featureData) => {
    try {
      const response = await fetch('/api/admin/features', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(featureData)
      })
      const newFeature = await response.json()
      setFeatures(prev => [...prev, newFeature])
      toast.success('New feature added successfully')
    } catch (error) {
      console.error('Failed to add feature:', error)
      toast.error('Failed to add new feature')
    }
  }

  const filteredFeatures = features
    .filter(feature => {
      if (filter === 'enabled') return feature.enabled
      if (filter === 'disabled') return !feature.enabled
      return true
    })
    .filter(feature =>
      feature.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feature.description.toLowerCase().includes(searchTerm.toLowerCase())
    )

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Feature Manager</h2>
        <button
          onClick={() => {/* Open add feature modal */}}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add New Feature
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search features..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 border rounded-lg">
          <option value="all">All Features</option>
          <option value="enabled">Enabled</option>
          <option value="disabled">Disabled</option>
        </select>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map(feature => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="feature-item p-4 bg-white rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{feature.name}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
                <Switch
                  checked={feature.enabled}
                  onChange={() => toggleFeature(feature.id)}
                  className={`${
                    feature.enabled ? 'bg-blue-600' : 'bg-gray-200'
                  } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}>
                  <span className="sr-only">
                    {feature.enabled ? 'Enable' : 'Disable'} {feature.name}
                  </span>
                  <span
                    className={`${
                      feature.enabled ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                  />
                </Switch>
              </div>
              <div className="text-sm text-gray-500">
                Last updated: {new Date(feature.updatedAt).toLocaleDateString()}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}