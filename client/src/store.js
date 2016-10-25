// import cssx from 'cssx'
import jss from 'jss'
import { includes, map } from 'lodash'
import React from 'react'
import Match from 'react-router/Match'

import items from './items'

// Need a webpack loader for this :(

// var sheet = cssx()

// sheet.add(<style>
//   .storeItem {
//     display: flex;
//   }
// </style>)

const styles = {
  storeItem: {
    display: 'flex',
    padding: '20px',
    'border-bottom': '1px solid',
    'justify-content': 'space-between',
  },
}

const { classes } = jss.createStyleSheet(styles).attach()

export default function Game({ buyItem, cash, inv }) {
  return (
    <div>
      <h2>Buy somethin good will ya?</h2>
      {map(items, item => <StoreItem cash={cash} item={item} buyItem={buyItem} inv={inv} />)}
    </div>
  )
}

function StoreItem({ buyItem, cash, item, inv }) {
  const hasItem = includes(inv, item.key)
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
