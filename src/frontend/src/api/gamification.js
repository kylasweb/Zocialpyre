import axios from 'axios'

const api = axios.create({
  baseURL: '/api/gamification'
})

export const gamificationApi = {
  getBadges: async () => {
    const { data } = await api.get('/badges')
    return data
  },

  getChallenges: async () => {
    const { data } = await api.get('/challenges')
    return data
  },

  updateChallengeProgress: async (challengeId, progress) => {
    const { data } = await api.post(`/challenges/${challengeId}/progress`, { progress })
    return data
  }
}