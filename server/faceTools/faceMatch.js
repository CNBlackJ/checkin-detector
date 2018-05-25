const client = require('./client')
const base64Encode = require('../../utils/base64Encode')

module.exports = async(imgs = []) => {
  if (imgs.length < 2) throw new Error('At least two images')
  const matchers = []
  imgs.forEach(img => {
    const matcher = {
      image: base64Encode(`${process.cwd()}/storage/${img}`),
      image_type: 'BASE64'
    }
    matchers.push(matcher)
  })
  const resp = await client.match(matchers)
  if (resp.error_msg === 'SUCCESS') {
    return resp.result.score
  } else {
    return 0
  }
}
