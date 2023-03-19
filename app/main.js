let exp = require('express')
let cors = require('cors')

let setup = require('./script/setup')
let config = require('./script/config')
let yt = require('./script/yt')

let app = exp()

app.get('/', (req, res) => {
  res.send('<center>summonizing success</center>')
})

app.get('/api', cors(config.cSetting), yt.apiV2)
app.get('/api/full', cors(config.cSetting), yt.V2backend)

app.listen(config.port, () => setup.portLOG())