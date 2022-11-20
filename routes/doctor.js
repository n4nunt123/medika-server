const doctor = require('express').Router()
const doctorController = require('../controller/doctorController')

doctor.get('/', doctorController.getDoctors)
doctor.get('/:id', doctorController.getDoctor)

module.exports = doctor
