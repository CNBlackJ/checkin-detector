const client = require('./client')
const base64Encode = require('../../utils/base64Encode')

module.exports = (path = './face1.jpeg', groupId = 'test', userId = '1', options = {}) => {
  const image = base64Encode(path)
  const imageType = 'BASE64'

  client.addUser(image, imageType, groupId, userId, options).then(function (result) {
    console.log(JSON.stringify(result))
  }).catch(function (err) {
    console.log(err)
  })
}
