const client = require('./client')
const base64Encode = require('../../utils/base64Encode')

module.exports = async (fileName = 'zhangyesheng.png') => {
  const image = base64Encode(`${process.cwd()}/storage/${fileName}`)
  const idCardSide = 'front'

  const options = {}
  options['detect_direction'] = 'true'
  options['detect_risk'] = 'false'

  const resp = await client.idcard(image, idCardSide, options)
  if (resp && resp.words_result) {
    const words = resp.words_result
    const idcardInfo = {}
    Object.keys(words).forEach(word => {
      idcardInfo[word] = words[word].words
    })
    return idcardInfo
  } else {
    return ''
  }
}
