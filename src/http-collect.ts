const http1 = require("http")
const url2 = process.argv[2]
let result2 = ''

http1.get(url2, (response: any) => {
  response.on('data', (data: any) => {
    result2 += data
  })
  response.on('end', () => {
    console.log(result2.length)
    console.log(result2)
  })
})

/*
HOW IT'S SUPPOSED TO BE DONE

const http = require('http')
const bl = require('bl')
    
http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
    if (err) {
        return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
    }))
})
*/