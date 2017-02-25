const express = require('express')
const compression = require('compression')

const app = express()
app.use(compression())

app.use(express.static('dist'))

app.set('port', (process.env.PORT || 3333))
app.listen(app.get('port'), () =>
  console.log('Server @', app.get('port')))
