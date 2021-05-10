import { uploader } from 'configs/Env'
import fs from 'fs'
import util from 'util'
import path from 'path'
import { pipeline } from 'stream'
const pump = util.promisify(pipeline)

exports.localUpload = async (fileStream) => {
  const uploadDir = uploader.dir
  if (!fs.existsSync(uploadDir)) { fs.mkdirSync(uploadDir, { recursive: true }) }

  const filename = 'cainoi.txt'
  await pump(fileStream, fs.createWriteStream(filename))
  return path.join(uploader.file.base_url, '/', filename)
}
