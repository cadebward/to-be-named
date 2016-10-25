import passport from 'passport'

const authenticationOptions = {
  successRedirect: '/',
  failureRedirect: '/login',
}

module.exports = function(app) {
  app.post('/login', passport.authenticate('local', authenticationOptions))
}
