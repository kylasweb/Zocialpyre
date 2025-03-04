import { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'

export const CommissionManagement = () => {
  const [commissionRules, setCommissionRules] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCommissionRules()
  }, [])

  const fetchCommissionRules = async () => {
    try {
      const response = await fetch('/api/finance/commission-rules')
      const data = await response.json()
      setCommissionRules(data)
    } catch (error) {
      toast.error('Failed to fetch commission rules')
    } finally {
      setLoading(false)
    }
  }

  const updateRule = async (ruleId, updates) => {
    try {
      const response = await fetch(`/api/finance/commission-rules/${ruleId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      })
      const updatedRule = await response.json()
      setCommissionRules(prev =>
        prev.map(rule => rule.id === ruleId ? updatedRule : rule)
      )
      toast.success('Commission rule updated')
    } catch (error) {
      toast.error('Failed to update commission rule')
    }
  }

  return (
    <div className="commission-management p-6">
      <h2 className="text-2xl font-bold mb-6">Commission Management</h2>
      
      <div className="grid gap-6">
        {commissionRules.map(rule => (
          <div key={rule.id} className="rule-card bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">{rule.name}</h3>
            <p className="text-gray-600">{rule.description}</p>
            <div className="mt-4">
              <label className="block text-sm font-medium">
                Commission Rate (%)
              </label>
              <input
                type="number"
                value={rule.rate}
                onChange={(e) => updateRule(rule.id, { rate: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}