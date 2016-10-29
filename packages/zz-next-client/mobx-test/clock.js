import { extendObservable, action } from 'mobx'
import { observer } from 'mobx-react'
import { style, merge } from 'next/css'
import React, { Component } from 'react'

const format = t => `${pad(t.getHours())}:${pad(t.getMinutes())}:${pad(t.getSeconds())}`

const pad = n => n < 10 ? `0${n}` : n

const styles = style({
  padding: '15px',
  display: 'inline-block',
  color: '#82FA58',
  font: '50px menlo, monaco, monospace'
})

export default observer(class Clock extends Component {

  constructor(props) {
    super(props)
    extendObservable(this, {
      lastUpdate: props.lastUpdate,
      light: props.light,
      tick: action(function (ts, light) {
        this.lastUpdate = ts
        this.light = light
      }),
    })
    this.tick = this.tick.bind(this)
  }

  componentDidMount () {
    this.timer = this.startClock()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  startClock() {
    return setInterval(() => this.tick(Date.now(), false), 800)
  }

  render() {
    return (
      <div className={merge(styles, style({ backgroundColor: this.light ? '#999' : '#000' }))}>
        {format(new Date(this.lastUpdate))}
      </div>
    )
  }

})
