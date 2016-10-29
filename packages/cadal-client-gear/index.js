import { observer } from 'mobx-react'
import React from 'react'

export default observer(function Gear({ store }) {
  const str = store.gear.length === 0 ? 'nothing' : store.gear.join(', ')
  return (
    <div>
      <h2>Your Stuff</h2>
      <div>Looks like you have {str}.</div>
    </div>
  )
})
