const http = require('http')
const url = process.argv[2]

http.get(url, (response: any) => {
  response.setEncoding('utf8')
  response.on('data', console.log)
})

/*
HOW IT'S SUPPOSED TO BE DONE

const http = require('http')
    
    http.get(process.argv[2], function (response: any) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    }).on('error', console.error)
*/