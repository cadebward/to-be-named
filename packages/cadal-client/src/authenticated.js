import axios from 'axios'
import React, { Component } from 'react'
import Redirect from 'react-router/Redirect'

export default class Authenticated extends Component {

  constructor(props) {
    super(props)
    this.state = { loading: true, error: null, user: null }
  }

  componentDidMount() {
    axios.get('/api/user')
      .then((resp) => this.setState({ loading: false, user: resp.data }))
      .catch((resp) => {
        console.log(resp)
        const error = resp.response.status === 401 ? null : 'ERROR'
        this.setState({ loading: false, error })
      })
  }

  render() {
    const { loading, error, user } = this.state
    const { children } = this.props
    if (loading) return <div>Loading...</div>
    if (error) return <div>An unexpected error occurred. soz.</div>
    if (user) return children(user)
    return <Redirect to="/login" />
  }
}
