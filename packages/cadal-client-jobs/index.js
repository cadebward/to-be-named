import axios from 'axios'
import cx from 'classnames'
import { action, observable } from 'mobx'
import { observer } from 'mobx-react'
import React, { Component } from 'react'

import styles from './style.css'

@observer
export default class Jobs extends Component {

  @observable tab = 'jobs'

  @action select = (newTab) => this.tab = newTab

  acceptJob(job) {
    axios.post(`/api/jobs/${job.id}`)
      .then(() => window.location.reload())
      .catch(() => alert('Error while trying to accept job :('))
  }

  render() {
    const { store } = this.props
    return (
      <div>
        <h2>Yo noob. I need a script kiddy to help me ddos these firewalls. I'll pay you a dolla for each time you ping the internetz.</h2>
        <button onClick={store.addOne}>Ping</button>
        <h2>Actual Jobs</h2>

        <button className={cx(styles.tab, { [styles.selected]: this.tab === 'jobs'})} onClick={() => this.select('jobs')}>Job Board</button>
        <button className={cx(styles.tab, { [styles.selected]: this.tab === 'myjobs'})} onClick={() => this.select('myjobs')}>My Jobs</button>
        <Fetch url={this.tab === 'jobs' ? '/api/jobs' : '/api/my-jobs'}>
          {(jobs) => (
            <ul className={styles.jobs}>
              {jobs.filter(job => !job.accepted).map(job => (
                <li className={styles.job}>
                  {job.type === 'steal_file' &&
                    <div>My client needs you to steal a file from {job.target}. His IP is {job.ip}. There is a {job.reward} reward. Think you can handle it?</div>
                  }
                  {job.type === 'steal_money' &&
                    <div>{job.target} has grown too powerful for his own good. Teach him a lesson by taking all his money. His IP is {job.ip}. There is a {job.reward} reward. Got the chops?</div>
                  }
                  {job.type === 'plant_virus' &&
                    <div>We believe {job.target} is up to no good. My client would like you to plant a virus on his machine. His IP is {job.ip}. There is a {job.reward} reward. Do you have what it takes?</div>
                  }
                  {this.tab === 'jobs' && <button onClick={() => this.acceptJob(job)}>Accept</button>}
                </li>
              ))}
            </ul>
          )}
        </Fetch>
      </div>
    )
  }
}

class Fetch extends Component {

  constructor(props) {
    super(props)
    this.state = { loading: true, error: null, data: null }
  }

  componentDidMount() {
    this.fetch(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.fetch(nextProps)
  }

  fetch(props) {
    this.setState({ loading: true, error: null, data: null })
    axios.get(props.url)
      .then(resp => this.setState({ loading: false, data: resp.data }))
      .catch(resp => this.setState({ loading: false, error: resp.data }))
  }

  render() {
    if (this.state.loading) return <div>loading...</div>
    if (this.state.error) return <div>ERROR</div>
    return this.props.children(this.state.data)
  }

}
