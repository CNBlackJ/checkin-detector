const Koa = require('koa')
const router = require('koa-router')()
const koaBody = require('koa-body')
const cors = require('koa-cors')
const fs = require('fs')

const controller = require('./controller')

const app = new Koa()

app.use(koaBody())
app.use(cors())
router.post('/api/photos', controller.api.photo.create)
router.get('/', home)

app.use(router.routes())

async function home (ctx) {
  ctx.response.type = 'html'
  ctx.body = fs.createReadStream(process.cwd() + '/client/index.html')
}

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000')
})
