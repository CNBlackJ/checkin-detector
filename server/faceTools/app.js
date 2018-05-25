const faceDetect = require('./faceDetect')
const faceSearch = require('./faceSearch')
const faceRegistry = require('./faceRegistry')
const faceMatch = require('./faceMatch')
const facePolice = require('./facePolice')

const faceDetectOptions = {
  face_field: 'age,beauty,expression,faceshape,gender,glasses,race,quality,facetype',
  max_face_num: 5,
  face_type: 'LIVE'
}
const path = './face1.jpeg'
// faceDetect(path, faceDetectOptions)

const faseSearchOptions = {
  quality_control: 'NORMAL',
  liveness_control: 'LOW',
  user_id: '1',
  max_user_num: '3'
}
const groupIdList = 'test'
// faceSearch(path, groupIdList, faseSearchOptions)

const faceRegOptions = {
  user_info: "user's info",
  quality_control: 'NORMAL',
  liveness_control: 'LOW'
}
const groupId = 'test'
const userId = '1'

// faceRegistry(path, groupId, userId, faceRegOptions)

const imgPaths = ['face_1527213311431.png', 'face_1527213393044.png']
// faceMatch(imgPaths).then(res => console.log(res))

// facePolice('face_1527213311431.png', '440224199410201791', '张业生')
