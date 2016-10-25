import bodyParser from 'body-parser'
import config from 'config'
import express from 'express'
import fs from 'fs'
import logger from 'morgan'
import path from 'path'
import { each, filter } from 'lodash'
import passport from 'passport'
import cookieParser from 'cookie-parser'
import session from 'express-session'

import local, { deserialize } from './strategies/local'

passport.use(local)
passport.serializeUser((user, cb) => cb(null, user.id))
passport.deserializeUser(deserialize)

const app = express()
const router = express.Router()

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(session({ secret: '?', resave: false, saveUninitialized: false }))
app.use(passport.initialize())
app.use(passport.session())

app.use('/api', router)

const routeFiles = fs.readdirSync(path.join(__dirname, 'routes'))
const validRoutes = filter(routeFiles, isJsFile)
each(validRoutes, (file) => require(`./routes/${file}`)(router))

const port = config.server.port
app.listen(port)
console.log(`Running on port ${port}`)

function isJsFile(file) {
  return file.split('.')[1] === 'js'
}
