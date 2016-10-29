import React, { Component } from 'react'

import Clock from './clock'
import Counter from './counter'
import store from './store'

export default class Main extends Component {

  static getInitialProps ({ req }) {
    const isServer = !!req
    return { ts: new Date(), isServer }
  }

  render () {
    return (
      <div>
        <Counter />
        <Clock light={this.props.isServer} lastUpdate={this.props.ts}/>
      </div>
    )
  }

}
