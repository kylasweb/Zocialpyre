import { useState, useEffect } from 'react'
import { Chart } from 'react-chartjs-2'
import { motion } from 'framer-motion'

export const FinanceManagement = () => {
  const [transactions, setTransactions] = useState([])
  const [stats, setStats] = useState({
    totalCommissions: 0,
    pendingPayouts: 0,
    totalEarnings: 0
  })

  useEffect(() => {
    fetchFinanceData()
  }, [])

  const fetchFinanceData = async () => {
    try {
      const [transactionsRes, statsRes] = await Promise.all([
        fetch('/api/finance/transactions'),
        fetch('/api/finance/stats')
      ])
      const [transactionsData, statsData] = await Promise.all([
        transactionsRes.json(),
        statsRes.json()
      ])
      setTransactions(transactionsData)
      setStats(statsData)
    } catch (error) {
      console.error('Failed to fetch finance data:', error)
    }
  }

  return (
    <div className="finance-dashboard p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="stat-card">
          <h3>Total Commissions</h3>
          <p className="text-2xl font-bold">${stats.totalCommissions}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="stat-card">
          <h3>Pending Payouts</h3>
          <p className="text-2xl font-bold">${stats.pendingPayouts}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="stat-card">
          <h3>Total Earnings</h3>
          <p className="text-2xl font-bold">${stats.totalEarnings}</p>
        </motion.div>
      </div>

      <div className="transactions-list">
        <h3 className="text-xl font-bold mb-4">Recent Transactions</h3>
        <table className="w-full">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(tx => (
              <tr key={tx.id}>
                <td>{new Date(tx.date).toLocaleDateString()}</td>
                <td>{tx.type}</td>
                <td>${tx.amount}</td>
                <td>{tx.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}