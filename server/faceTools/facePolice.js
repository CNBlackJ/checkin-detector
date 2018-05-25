const client = require('./client')
const base64Encode = require('../../utils/base64Encode')

module.exports = (fileName, idCardNumber, name, options = {}) => {
  const image = base64Encode(`${process.cwd()}/storage/${fileName}`)
  const imageType = 'BASE64'

  // const options = {}
  // options['quality_control'] = 'NORMAL'
  // options['liveness_control'] = 'LOW'

  client.personVerify(image, imageType, idCardNumber, name, options).then(function (result) {
    console.log(JSON.stringify(result))
  }).catch(function (err) {
    console.log(err)
  })
}
