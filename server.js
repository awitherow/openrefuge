const express = require('express')

const app = express()

if (process.env.APP_ENV === 'PROD') {
  const compression = require('compression')
  const history = require('connect-history-api-fallback')
  const staticMiddleWare = express.static('dist')

  app.use(compression())
  app.use(staticMiddleWare)
  app.use(history())
  app.use(staticMiddleWare)

  app.get('*.js', function (req, res, next) {
    req.url = req.url + '.gz'
    res.set('Content-Encoding', 'gzip')
    next()
  })
}

app.set('port', (process.env.PORT || 3333))
app.listen(app.get('port'), () =>
  console.log('Server @', app.get('port')))
