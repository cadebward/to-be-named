import { find } from 'lodash'
import { Strategy } from 'passport-local'

const users = [
  { id: 1, username: 'dallin', email: 'dosmun@gmail.com' },
  { id: 2, username: 'cade', email: 'cadebward@gmail.com' },
]

export default new Strategy((username, password, done) => {
  const user = find(users, { username })
  if (!user) return done(new Error('Authentication failed.'))
  return done(null, user)
})

export function deserialize(id, cb) {
  const user = find(users, { id })
  if (!user) return cb(new Error('Authentication failed.'))
  cb(null, user)
}
