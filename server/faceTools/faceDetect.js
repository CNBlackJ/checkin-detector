const client = require('./client')
const base64Encode = require('../../utils/base64Encode')

module.exports = async(fileName, options = {}) => {
  const image = base64Encode(`${process.cwd()}/storage/${fileName}`)
  const imgType = 'BASE64'

  // 带参数调用人脸检测
  return client.detect(image, imgType, options)
}
