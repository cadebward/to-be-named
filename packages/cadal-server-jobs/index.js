const faker = require('faker')
const { filter, findIndex, sample, without } = require('lodash')

exports.routes = function (authedRouter) {
  authedRouter.get('/jobs', getJobs)
  authedRouter.get('/my-jobs', getMyJobs)
  authedRouter.post('/jobs/:id', claimJob)
}

const jobs = []

const assignedJobs = []

function getJobs(req, res) {
  const { limit, skip } = req.query
  res.json(jobs.slice(normalize(skip, 0), normalize(limit, 0, 50, 10)))
}

function getMyJobs(req, res) {
  const { limit, skip, status } = req.query
  let myJobs = filter(assignedJobs, { userId: req.user.id })
  if (status) myJobs = filter(myJobs, { status })
  res.json(myJobs.slice(normalize(skip, 0), normalize(limit, 0, 50, 10)))
}

function claimJob(req, res) {
  const i = findIndex(jobs, { id: req.params.id })
  if (i < 0) return res.sendStatus(400)
  const job = jobs.splice(i, 1)[0]
  assignedJobs.push(Object.assign(job, { userId: req.user.id, status: 'in_progress' }))
  res.sendStatus(200)
}

const attackTypes = ['steal_file', 'steal_money', 'plant_virus']
function generateJobs(count = 20) {
  for (let i = 0; i < count; ++i) {
    jobs.push({
      id: faker.random.uuid(),
      type: sample(attackTypes),
      target: faker.name.findName(),
      ip: faker.internet.ip(),
      reward: faker.commerce.price(0, 1000, 2, '$'),
    })
  }
}

setInterval(generateJobs, 15 * 60 * 1000)
generateJobs(10)

function normalize(numba, min = -Infinity, max = +Infinity, _default = 0) {
  const num = +numba
  if (isNaN(num)) return _default
  if (num < min) return min
  if (num > max) return max
  return num
}
