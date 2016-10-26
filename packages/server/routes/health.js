module.exports = function (app) {
  app.get('/health', (req, res) => {
    res.sendStatus(200)
  })
}
