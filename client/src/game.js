import jss from 'jss'
import React, { Component } from 'react'
import Link from 'react-router/Link'
import Match from 'react-router/Match'
import Miss from 'react-router/Miss'
import Redirect from 'react-router/Redirect'

import Gear from './gear'
import Login from './login'
// eslint-disable-next-line
import Store from 'babel!cssx!./store.lol'
import Noob from './noob'

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
                <Match exactly pattern="/" component={Home} />
                <Match exactly pattern="/store" render={() => <Store cash={cash} buyItem={this.buyItem} inv={inv} />} />
                <Match exactly pattern="/gear" render={() => <Gear inv={inv} />} />
                <Match exactly pattern="/noob" render={() => <Noob addOne={this.addOne} />} />
              </div>
            )}
          </Authenticated>
        )} />
      </div>
    )
  }

}

function Home() {
  return <h2>Welcome to Hacker's Paradise!</h2>
}

class Authenticated extends Component {

  constructor(props) {
    super(props)
    this.state = { loading: false, error: null, user: null }
  }

  componentDidMount() {
    // TODO_CADE:: try and log in here
    this.setState({ loading: true })
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