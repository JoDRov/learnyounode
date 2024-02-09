const myModule = require("./myModule")

const dirPath = process.argv[2]
const extension = process.argv[3]

myModule(dirPath, extension, (err: any, list: string[]) => {
    if (err) console.error("This is an error")

    list.forEach(file => {
        console.log(file)
    })
})