const bodyParser = require('body-parser')
const config = require('config')
const cookieParser = require('cookie-parser')
const express = require('express')
const session = require('express-session')
const fs = require('fs')
const { each, filter } = require('lodash')
const logger = require('morgan')
const path = require('path')

const jobsResource = require('cadal-server-jobs')
const loginResource = require('cadal-server-login')
const resources = [jobsResource, loginResource]

const app = express()
const authedRouter = express.Router()
const unauthedRouter = express.Router()

app.use(express.static('node_modules/cadal-client/src'))
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(session({ secret: config.secret, resave: false, saveUninitialized: false }))

each(resources, resource => resource.preRoutes && resource.preRoutes(app))

app.use('/api', unauthedRouter)
app.use('/api', authedRouter)

unauthedRouter.get('/health', (req, res) => res.sendStatus(200))
authedRouter.use((req, res, next) => {
  if (!req.user) return res.sendStatus(401)
  next()
})

each(resources, resource => resource.routes && resource.routes(authedRouter, unauthedRouter))

app.listen(config.port, () => console.log(`Running on port ${config.port}`))
