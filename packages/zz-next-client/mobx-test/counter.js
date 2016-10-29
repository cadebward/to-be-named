import { extendObservable, action } from 'mobx'
import { observer } from 'mobx-react'
import React, { Component } from 'react'

export default observer(class Counter extends Component {

  constructor(props) {
    super(props)
    extendObservable(this, {
      count: 10,
      increment: action(function () {
        this.count++
      }),
      decrement: action(function () {
        this.count--
      })
    })
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  render() {
    return (
      <div>
        <h3>{this.count}</h3>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }

})
