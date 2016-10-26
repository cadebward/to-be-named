import axios from 'axios'
import jss from 'jss'
import React, { Component } from 'react'

const styles = {
  menu: {
    display: 'flex',
    padding: '20px',
    'border-bottom': '1px solid',
    'justify-content': 'space-around',
  },
}

const { classes } = jss.createStyleSheet(styles).attach()

export default class Game extends Component {

  constructor(props) {
    super(props)
    this.state = { cash: 0, inv: [] }
  }

  buyItem = (item) => {
    if (this.state.cash < item.price) return
    this.setState({
      cash: this.state.cash - item.price,
      inv: [...this.state.inv, item.key]
    })
  }

  addOne = () => {
    this.setState({ cash: this.state.cash + 1})
  }

  render() {
    const { cash, inv } = this.state
    return (
      <div>
        <Match exactly pattern="/login" component={Login} />
        <Miss render={() => (
          <Authenticated>
            {(user) => (
              <div>
                <div className={classes.menu}>
                  <Link to="/">Home</Link>
                  <Link to="/store">Store</Link>
                  <Link to="/gear">Gear</Link>
                  <Link to="/noob">Noob</Link>
                  <div>Current Cash: {cash}</div>
                </div>
              </div>
            )}
          </Authenticated>
        )} />
      </div>
    )
  }

}

class Authenticated extends Component {

  constructor(props) {
    super(props)
    this.state = { loading: false, error: null, user: null }
  }

  componentDidMount() {
    this.setState({ loading: true })
    axios.get('/api/user')
      .then((resp) => this.setState({ loading: false, user: resp.data }))
      .catch(console.error)
    // if error:  this.setState({ loading: false, error: 'OH NOES' })
    // if success:  this.setState({ lodaing: false, user: { name: 'bubba' } })
    // if not logged in:  this.setState({ loading: false })
  }

  render() {
    // const { loading, error, user } = this.state
    const { children } = this.props
    // if (loading) return <div>Loading...</div>
    // if (error) return <div>An unexpected error occurred. soz.</div>
    // if (user) return children(user)
    // return <Redirect to="/login" />
    return children({})
  }
}
