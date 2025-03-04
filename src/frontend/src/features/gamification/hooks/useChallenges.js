import { useState, useEffect } from 'react'
import { gamificationApi } from '../../../api/gamification'

export const useChallenges = () => {
  const [challenges, setChallenges] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchChallenges()
  }, [])

  const fetchChallenges = async () => {
    try {
      const data = await gamificationApi.getChallenges()
      setChallenges(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const updateProgress = async (challengeId, progress) => {
    try {
      const updatedChallenge = await gamificationApi.updateChallengeProgress(challengeId, progress)
      setChallenges(prev =>
        prev.map(challenge =>
          challenge.id === challengeId ? updatedChallenge : challenge
        )
      )
    } catch (err) {
      setError(err.message)
    }
  }

  return { challenges, loading, error, updateProgress }
}