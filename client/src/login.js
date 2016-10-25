import React, { Component } from 'react'

export default class Game extends Component {

  constructor(props) {
    super(props)
    this.state = { username: '', password: '' }
  }

  update = (key) => {
    return (e) => {
      this.setState({ [key]: e.target.value })
    }
  }

  login = () => {
    // TODO_CADE:: work your login magic here
    // redirect to / on success
  }

  render() {
    const { username, password } = this.state
    return (
      <div>
        <h2>Login</h2>
        <label>Username</label>
        <input value={username} onChange={this.update('username')} type="text" />
        <label>Password</label>
        <input value={password} onChange={this.update('password')} type="password" />
        <button onClick={this.login}>Login</button>
      </div>
    )
  }

}
