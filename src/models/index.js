import fs from 'fs'
import path from 'path'

const basename = path.basename(__filename)
const db = {}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))
    const key = file.replace(/.js$/g, '')
      .split('.')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')
    db[key] = model[Object.keys(model)[0]]
  })

module.exports = db
