import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DashboardLayout } from './layouts/DashboardLayout'
import { Dashboard } from './pages/Dashboard'
import './App.css'

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* Add more routes here */}
        </Routes>
      </DashboardLayout>
    </Router>
  )
}

export default App
