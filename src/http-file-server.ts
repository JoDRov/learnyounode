const http3 = require("http")
const fs3 = require("fs")
const portNumber = Number(process.argv[2])
const fileName = process.argv[3]

const server1 = http3.createServer((request: any, response: any) => {
    fs3.createReadStream(fileName).pipe(response)
})

server1.listen(portNumber, () => {
    console.log(`Server listening on port:`, portNumber)
})