var fsAsync = require('fs') // require is a special function provided by node
var myNumber = undefined // we don't know what the number is yet since it is stored in a file

fsAsync.readFile(process.argv[2], (err: any, data: any) => {
    if (err) {
        throw err
    } else {
        console.log((data.toString().split(`\n`).length) - 1)
    }
})