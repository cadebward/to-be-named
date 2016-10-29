import axios from 'axios'
import React, { Component } from 'react'

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = { username: '', password: '' }
  }

  update = (key) => (e) => {
    this.setState({ [key]: e.target.value })
  }

  login = () => {
    const { username, password } = this.state
    axios.post('/api/login', { username, password })
      .then((resp) => window.location = '/')
      .catch(console.error)
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
