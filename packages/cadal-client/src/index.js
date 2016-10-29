import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router/HashRouter'
import Match from 'react-router/Match'

import Gear from 'cadal-client-gear'
import Home from 'cadal-client-home'
import Jobs from 'cadal-client-jobs'
import Login from 'cadal-client-login'
import Store from 'cadal-client-store'

import Authenticated from './authenticated'
import Header from './header'
import store from './store'

function App() {
  return (
    <div>
      <Match exactly pattern="/login" component={Login} />
      <Authenticated>
        {(user) => (
          <div>
            <Header store={store} />
            <Match exactly pattern="/" render={() => <Home store={store} />} />
            <Match exactly pattern="/store" render={() => <Store store={store} />} />
            <Match exactly pattern="/gear" render={() => <Gear store={store} />} />
            <Match exactly pattern="/jobs" render={() => <Jobs store={store} />} />
          </div>
        )}
      </Authenticated>
    </div>
  )
}

const el = document.getElementById('game')
ReactDOM.render(<Router><App /></Router>, el)
