const axios = require('axios')

module.exports = (React) => class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = { username: '', password: '' }
    this.login = this.login.bind(this)
    this.update = this.update.bind(this)
  }

  update(key) {
    return (e) => {
      this.setState({ [key]: e.target.value })
    }
  }

  login() {
    const { username, password } = this.state
    axios.post('http://localhost:3001/api/login', { username, password })
      .then((resp) => {
        console.log('got login suces')
        window.location = '/'
      })
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
