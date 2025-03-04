import { useState, useEffect } from 'react'

export const useLeaderboard = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        // Replace with actual API call
        const response = await fetch('/api/leaderboard')
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.error('Failed to fetch leaderboard:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchLeaderboard()
  }, [])

  return { data, loading }
}