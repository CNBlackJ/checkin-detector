const Koa = require('koa')
const router = require('koa-router')()
const koaBody = require('koa-body')
const cors = require('koa-cors')
const fs = require('fs')
const axios = require('axios')

const config = require('./config')
const faceDetect = require('./faceTools/faceDetect')
const faceMatch = require('./faceTools/faceMatch')
const idcardDetect = require('./ordTools/idcardDetect')

const app = new Koa()

app.use(koaBody())
app.use(cors())
router.post('/api/photos', create)

app.use(router.routes())

async function create (ctx) {
  try {
    const { base64Img } = ctx.request.body
    const photoFilename = savePhoto(base64Img)
    const faceDetectOptions = {
      face_field: 'age,expression,faceshape,gender,glasses,race,facetype',
      max_face_num: 3,
      face_type: 'LIVE'
    }
    const faceRes = await faceDetect(photoFilename, faceDetectOptions)
    if (!faceRes) throw new Error('Cannot detect face.')
    const idCardImg = getIdCard(441)
    const imgCardInfo = await idcardDetect(idCardImg)
    const searchCardInfo = await getIdCardInfo(imgCardInfo['公民身份号码'])
    if (!searchCardInfo) throw new Error('Idcard does not exist!!')

    const imgs = [idCardImg, photoFilename]
    const score = await faceMatch(imgs)
    const isMatch = score >= 50
    console.log(score)
    ctx.body = {
      statusCode: isMatch ? 2001 : 4001,
      result: isMatch ? 'Success to match.' : 'Fail to match.'
    }
  } catch (error) {
    ctx.body = error
  }
}

function savePhoto (base64Img) {
  try {
    const base64Data = base64Img.replace(/^data:image\/png;base64,/, '')
    const fileName = `face_${Date.now()}.png`
    fs.writeFileSync(`./storage/${fileName}`, base64Data, 'base64')
    return fileName
  } catch (error) {
    return error
  }
}

function getIdCard (id = 441) {
  const idCardImg = {
    441: 'zhangyesheng.png',
    442: 'b.png',
    443: 'c.png'
  }
  return idCardImg[id] || ''
}

async function getIdCardInfo (cardNo) {
  const key = config.JUHE_KEY
  const resp = await axios({
    method: 'get',
    baseURL: 'http://apis.juhe.cn',
    url: `/idcard/index?key=${key}&cardno=${cardNo}`
  })
  if (resp.data.resultcode === '200') {
    return resp.data.result
  } else {
    return ''
  }
}

app.listen(3000)
