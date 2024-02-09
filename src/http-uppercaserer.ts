const http4 = require("http")
const map = require("through2-map")
const port = Number(process.argv[2])

const server2 = http4.createServer((request: any, response: any) => {
    if (request.method != "POST"){
        return response.end("send me a POST\n")
    }

    request.pipe(map((chunk: any) => {
        return chunk.toString().toUpperCase()
    })).pipe(response)
})

server2.listen(port)