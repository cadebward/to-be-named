import React from 'react'
import Match from 'react-router/Match'

export default function Gear({ inv }) {
  const str = inv.length === 0 ? 'nothing' : inv.join(', ')
  return (
    <div>
      <h2>Your Stuff</h2>
      <div>Looks like you have {str}.</div>
    </div>
  )
}
