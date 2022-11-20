const { ObjectId } = require('mongodb')
const { connectdb } = require("../config/connection")

class scheduleController {
  static async getSchedules(req, res) {
    try {
      const data = await connectdb().collection('userSchedule').find().toArray()
      if(!data) res.status(400).json({ message: 'Error data not found' })
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json({ message: 'internal server error' })
    }
  }

  
  static async getUsersSchedule(req, res) {
    try {
      const { userId } = req.params
      const data = await connectdb().collection('userSchedule').find({ userId }).toArray()
      if(!data) res.status(400).json({ message: 'Error data not found' })
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json({ message: 'internal server error' })
    }
  }

  static async getSchedule(req, res) {
    try {
      const { id } = req.params
      const data = await connectdb().collection('userSchedule').findOne({ _id: ObjectId(id) })
      if(!data) res.status(404).json({ message: 'Error data not found' })
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json({ message: 'internal server error' })
    }
  }

  static async addNewSchedule(req, res) { 
    try {
      const { 
        fullName, 
        age, 
        gender, 
        phoneNumber, 
        address, 
        day, 
        doctor,
        doctorScheduleStart,
        doctorScheduleEnd,
        doctorSpecialist,
        userId } = req.body
      const data = await connectdb().collection('userSchedule').insertOne({ 
        fullName, 
        age, 
        gender, 
        phoneNumber, 
        address, 
        day, 
        doctor,
        doctorScheduleStart,
        doctorScheduleEnd,
        doctorSpecialist,
        userId
      })
      res.status(200).json({ message: `Success create data with id: ${data.insertedId}` })
    } catch (err) {
      res.status(500).json({ message: 'internal server error' })
    }
  }
}

module.exports = scheduleController