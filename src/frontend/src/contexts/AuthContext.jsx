import { createContext, useContext, useState } from 'react'
import axios from 'axios'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  
  const login = async (credentials) => {
    const response = await axios.post('/api/auth/login', credentials)
    setUser(response.data.user)
    localStorage.setItem('token', response.data.token)
  }

  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })

  return (
    <AuthContext.Provider value={{ user, login, api }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)