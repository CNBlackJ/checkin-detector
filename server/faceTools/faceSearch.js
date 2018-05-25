const client = require('./client')
const base64Encode = require('../../utils/base64Encode')

module.exports = (path = './face1.jpeg', groupIdList = 'test', options = {}) => {
  const image = base64Encode(path)
  const imageType = 'BASE64'

  client.search(image, imageType, groupIdList, options).then(function (result) {
    console.log(JSON.stringify(result))
  }).catch(function (err) {
    console.log(err)
  })
}
