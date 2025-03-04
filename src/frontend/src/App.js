import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import LeaderDashboard from './components/LeaderDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/leader" element={<LeaderDashboard />} />
        <Route path="/" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;