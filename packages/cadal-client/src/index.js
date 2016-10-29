import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router/HashRouter'
import Match from 'react-router/match'

import Login from 'cadal-client-login'

function Home() {
  return <div>Hooooooome</div>
}

function App() {
  return (
    <div>
      <Match exactly pattern="/" component={Home} />
      <Match exactly pattern="/login" component={Login} />
    </div>
  )
}

const el = document.getElementById('game')
ReactDOM.render(<Router><App /></Router>, el)
