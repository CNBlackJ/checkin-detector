# checkin-detetor

人脸检测 / 人脸识别 / 人脸搜索 / 身份证识别 / 人脸比对
可实现实时拍照与身份证照片进行对比.

### Get Start

`$ git clone git@github.com:CNBlackJ/checkin-detector.git && cd checkin-detector`

`$ npm install`

```javascript
// add config
// ./server/config/{{process.env.NODE_ENV}}.js
module.exports =  {
  APP_ID: 'baidu app id',
  API_KEY: 'baidu api key',
  SECRET_KEY: 'baidu secrect key',
  JUHE_KEY: 'juhe api key'
}

```

`$ npm run dev`

- 参考资料
  - [百度人脸识别](https://ai.baidu.com/docs#/Begin/top)
  - [聚合身份查询](https://www.juhe.cn/docs/api/id/38)

### TODO 

- 获取身份证照片
- 接入公安人口系统
- 人像注册
