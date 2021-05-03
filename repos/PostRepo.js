import { PostModel } from 'models'
import { PostRedis } from 'cache/redis'
import { CACHE } from 'configs/Constant'

exports.getPosts = async () => {
  let posts = await PostRedis.getPosts(true)
  if (posts) {
    return posts
  }

  posts = await PostModel.find()
  await PostRedis.setPosts(posts, CACHE.HOUR(10000), true)

  return posts
}

exports.getPost = async (id) => {
  return (await PostModel.find({ _id: id }))
}

exports.createPost = async (data) => {
  return (await PostModel.create(data))
}
