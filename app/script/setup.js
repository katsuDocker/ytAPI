let config = require('./config')

let port = config.port

function portLOG() {
  console.log('|===================================================|')
  console.log('|                                                   |')
  console.log('|                                                   |')
  console.log(`|      App starting up @ http://localhost:${port}      |`)
  console.log('|                                                   |')
  console.log('|                                                   |')
  console.log('|===================================================|')
}

module.exports = {
  portLOG
}