const { ObjectId } = require('mongodb')
const { connectdb } = require("../config/connection")
const { signToken } = require('../helper/jwt')

class UserController {
  static async getUserById(req, res) {
    try {
      const { id } = req.params
      const data = await connectdb().collection('users').findOne({ _id: ObjectId(id) })
      if(!data) res.status(400).json({ message: 'Error data not found' })
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json({ message: 'internal server error' })
    }
  }

  static async register(req, res) { 
    try {
      const { fullName, email, password, age, gender, phoneNumber, address } = req.body
      const data = await connectdb().collection('users').insertOne({
        fullName,
        email,
        password,
        age,
        gender,
        phoneNumber,
        address
      })
      res.status(200).json({ message: `Success create data with id: ${data.insertedId}` })
    } catch (err) {
      res.status(500).json({ message: 'internal server error' })
    }
  }
  
  static async login(req, res) {
    try {
      const { email, password } = req.body
      const data = await connectdb().collection('users').findOne({ email })
      if(!data) res.status(400).json({ message: 'Error data not found' })
      else if(password !== data.password) res.status(404).json({ message: 'Invalid email/password' })
      const payload = { id: data._id }
      const access_token = signToken(payload)
      res.status(200).json({ access_token, id: data._id })
    } catch (err) {
      res.status(500).json({ message: 'internal server error' })
    }
  }
}

module.exports = UserController