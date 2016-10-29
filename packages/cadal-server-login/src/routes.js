const passport = require('passport')

module.exports = function(authedRouter, unauthedRouter) {
  unauthedRouter.post('/login', passport.authenticate('local'), user)
  authedRouter.get('/user', user)
}

function user(req, res) {
  res.json(req.user)
}
