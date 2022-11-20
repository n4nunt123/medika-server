const scheduleController = require('../controller/scheduleController')
const scheduleUser = require('express').Router()

scheduleUser.get('/', scheduleController.getSchedules)
scheduleUser.post('/', scheduleController.addNewSchedule)
scheduleUser.get('/user/:userId', scheduleController.getUsersSchedule)
scheduleUser.get('/:id', scheduleController.getSchedule)

module.exports = scheduleUser
