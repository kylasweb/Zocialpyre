import { useState, useEffect } from 'react'
import axios from 'axios'

export const useBadges = () => {
  const [badges, setBadges] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const { data } = await axios.get('/api/badges')
        setBadges(data)
      } catch (error) {
        console.error('Failed to fetch badges:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBadges()
  }, [])

  return { badges, loading }
}