import { observer } from 'mobx-react'
import React from 'react'
import Link from 'react-router/Link'

import styles from './header.css'

export default observer(function Header({ store }) {
  const cash = 0
  return (
    <div className={styles.menu}>
      <Link to="/">Home</Link>
      <Link to="/store">Store</Link>
      <Link to="/gear">Gear</Link>
      <Link to="/jobs">Jobs</Link>
      <div>Current Cash: {store.cash}</div>
    </div>
  )
})
