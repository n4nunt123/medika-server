const router = require('express').Router()
const user = require('./user')
const doctor = require('./doctor')
const scheduleUser = require('./scheduleUser')


router.use('/users', user)
router.use('/doctors', doctor)
router.use('/schedule-users', scheduleUser)

module.exports = router