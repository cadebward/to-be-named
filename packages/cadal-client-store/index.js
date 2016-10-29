import { observer } from 'mobx-react'
import React from 'react'

import items from './items'
import styles from './style.css'

export default function Store({ store }) {
  return (
    <div>
      <h2>Buy somethin good will ya?</h2>
      {items.map((item, i) => (
        <StoreItem
          key={i}
          item={item}
          store={store}
        />
      ))}
    </div>
  )
}

const StoreItem = observer(function ({ item, store }) {
  const hasItem = store.gear.includes(item.key)
  return (
    <div className={styles.storeItem}>
      <div>{item.title}</div>
      <div>Price: {item.price}</div>
      {hasItem
        ? <div>SOLD OUT</div>
        : <button disabled={item.price > store.cash} onClick={() => store.buyItem(item)}>Buy Now!</button>}
    </div>
  )
})
