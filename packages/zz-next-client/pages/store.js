import jss from 'jss'
import React from 'react'

import items from '../common/items'

const styles = {
  storeItem: {
    display: 'flex',
    padding: '20px',
    'border-bottom': '1px solid',
    'justify-content': 'space-between',
  },
}

const { classes } = jss.createStyleSheet(styles).attach()

export default function Store() {
  const buyItem = () => null
  const cash = 0
  const inv = []
  return (
    <div>
      <h2>Buy somethin good will ya?</h2>
      {items.map(item => <StoreItem cash={cash} item={item} buyItem={buyItem} inv={inv} />)}
    </div>
  )
}

function StoreItem({ buyItem, cash, item, inv }) {
  const hasItem = inv.includes(item.key)
  return (
    <div className={classes.storeItem}>
      <div>{item.title}</div>
      <div>Price: {item.price}</div>
      {hasItem
        ? <div>SOLD OUT</div>
        : <button disabled={item.price > cash} onClick={() => buyItem(item)}>Buy Now!</button>}
    </div>
  )
}
