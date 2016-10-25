import React from 'react'
import Match from 'react-router/Match'

export default function Game({ addOne }) {
  return (
    <div>
      <h2>Yo noob. I need a script kiddy to help me ddos these firewalls. I'll pay you a dolla for each time you ping the internetz.</h2>
      <button onClick={addOne}>Ping</button>
    </div>
  )
}
