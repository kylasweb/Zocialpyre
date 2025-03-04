import { useState, useEffect } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export default function CustomizationPanel() {
  const [settings, setSettings] = useLocalStorage('dashboardSettings', {
    layout: 'grid',
    theme: 'light',
    animations: true
  })

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme)
    setSettings(prev => ({ ...prev, theme }))
  }

  return (
    <div className="customization-panel">
      <div className="theme-selector">
        <button 
          onClick={() => applyTheme('light')}
          className={settings.theme === 'light' ? 'active' : ''}>
          ☀️ Light
        </button>
        <button
          onClick={() => applyTheme('dark')}
          className={settings.theme === 'dark' ? 'active' : ''}>
          🌙 Dark
        </button>
      </div>
      
      <div className="layout-options">
        <label>
          <input
            type="checkbox"
            checked={settings.animations}
            onChange={(e) => setSettings(prev => ({
              ...prev,
              animations: e.target.checked
            }))}
          />
          Enable Animations
        </label>
      </div>
      
      <div className="grid-layout-control">
        <h4>Dashboard Layout</h4>
        <select
          value={settings.layout}
          onChange={(e) => setSettings(prev => ({
            ...prev,
            layout: e.target.value
          }))}>
          <option value="grid">Grid View</option>
          <option value="list">List View</option>
          <option value="compact">Compact View</option>
        </select>
      </div>
    </div>
  )
}