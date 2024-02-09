const net = require("net")
const portNum = process.argv[2]

function addingZero(i: number) {
  return (i < 10 ? '0' : '') + i
}

function getDate () {
  var date = new Date()
  return `${date.getFullYear()}-${addingZero(date.getMonth() + 1)}-${addingZero(date.getDate())} ${addingZero(date.getHours())}:${addingZero(date.getMinutes())}`
}

let server = net.createServer(function (socket: any) {
  socket.end(getDate() + '\n')
})

server.listen(Number(portNum))