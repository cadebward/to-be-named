const passport = require('passport')

const { strategy, deserialize } = require('./src/local-strategy')
const routes = require('./src/routes')

exports.preRoutes = function setupPreRoutes(app) {
  passport.use(strategy)
  passport.serializeUser((user, cb) => cb(null, user.id))
  passport.deserializeUser(deserialize)

  app.use(passport.initialize())
  app.use(passport.session())
}

exports.routes = routes
