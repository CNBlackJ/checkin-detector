const config = require('../config')
const AipOcrClient = require('baidu-aip-sdk').ocr

// 设置APPID/AK/SK
const APP_ID = config.APP_ID
const API_KEY = config.API_KEY
const SECRET_KEY = config.SECRET_KEY

// 新建一个对象，建议只保存一个对象调用服务接口
const client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY)

module.exports = client
