import { Toast, Toaster } from '@react-three/uikit'
import { useWebSocket } from '../hooks/useWebSocket'

export const NotificationProvider = ({ children }) => {
  const [achievements, setAchievements] = useState([])
  
  useWebSocket('achievements', (message) => {
    setAchievements(prev => [
      ...prev,
      <Toast key={message.id} title="New Achievement!" visual={message.badge}>
        {message.description}
      </Toast>
    ])
  })

  return (
    <>
      {children}
      <Toaster>{achievements}</Toaster>
    </>
  )
}