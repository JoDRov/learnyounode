import { error } from "console";

const fs2 = require("fs")
const path4 = require("path")

module.exports = function myFunction (dirName: string, fileExt: string, callback: any){
    fs2.readdir(dirName, (err: any, list: string[]) => {
        if (err) return callback(err)

        const filteredList = list.filter(file => path4.extname(file) === `.${fileExt}`)
        callback(null, filteredList)
    })
}