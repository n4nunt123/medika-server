const user = require('express').Router()
const UserController = require('../controller/userController')

user.get('/:id', UserController.getUserById)
user.post('/register', UserController.register)
user.post('/login', UserController.login)

module.exports = user
