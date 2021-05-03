const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: {
      type: String
    },
    password: {
      type: String
    }
  }
)

module.exports.UserModel = mongoose.model('users', userSchema)
