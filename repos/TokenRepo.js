import { TokenModel, UserModel } from 'models'

exports.createToken = async (data) => {
  return (await TokenModel.create(data))
}

exports.getTokenWithUser = async (conditions) => {
  return (await TokenModel.findOne(conditions).populate('user_id'))
}

exports.getToken = async (conditions) => {
  return (await TokenModel.findOne(conditions))
}
