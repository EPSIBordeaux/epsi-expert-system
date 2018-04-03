const path = require('path')

const bodyParser = require('body-parser')
const express = require('express')
const nunjucks = require('nunjucks')

const router = require('./routes/index')

const app = express()

app.set('engine', nunjucks.configure(path.join(__dirname, 'views'), {
  autoescape: true,
  cache: app.get('env') === 'production',
  express: app,
  watch: app.get('env') === 'dev'
}))

app.set('view engine', 'njk')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', router)

app.use('/css', express.static(`${__dirname}/public/css`))
app.use('/js', express.static(`${__dirname}/public/js`))

app.listen(process.env.PORT, () => {
  console.log(`Server is up and running on port ${process.env.PORT} !`)
})
