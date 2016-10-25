import passport from 'passport'

module.exports = function(app) {
  app.post('/login', passport.authenticate('local'), login)
  app.get('/user', user)
}

function login(req, res) {
  res.json(req.user)
}

function user(req, res) {
  if (req.user) return res.json(req.user)
  res.sendStatus(401)
}
