import { useState } from 'react'
import { motion } from 'framer-motion'

export const SponsorID = ({ id }) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(id)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <motion.div 
      className="sponsor-id-container"
      whileHover={{ scale: 1.02 }}>
      <h4>Your Sponsor ID</h4>
      <div className="id-display">
        <code>{id}</code>
        <button
          onClick={copyToClipboard}
          className={`copy-btn ${copied ? 'copied' : ''}`}>
          {copied ? '✓ Copied!' : '📋 Copy'}
        </button>
      </div>
      <p className="referral-link">
        Your referral link: {window.location.origin}/join/{id}
      </p>
    </motion.div>
  )
}