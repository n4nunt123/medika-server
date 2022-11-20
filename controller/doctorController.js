const { ObjectId } = require('mongodb')
const { connectdb } = require("../config/connection")

class doctorController {
  static async getDoctors(req, res) {
    try {
      const data = await connectdb().collection('doctor').find().toArray()
      if(!data) res.status(400).json({ message: 'Error data not found' })
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json({ message: 'internal server error' })
    }
  }

  static async getDoctor(req, res) {
    try {
      const { id } = req.params
      const data = await connectdb().collection('doctor').findOne({ _id: ObjectId(id) })
      if(!data) res.status(400).json({ message: 'Error data not found' })
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json({ message: 'internal server error' })
    }
  }
}

module.exports = doctorController