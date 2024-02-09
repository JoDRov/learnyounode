const fs = require ('fs')

const string: string = fs.readFileSync(process.argv[2], "utf-8")

const resultado: number = (string.split(`\n`).length) - 1 

console.log(resultado)

