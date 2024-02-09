const fs1 = require('fs')
const path2 = require("path")
const dir = process.argv[2]
const exten = process.argv[3]

function filterFiles(dirPath: string, fileExtension: string){
  fs1.readdir(dirPath, (err: string, files: string[]) => { 
    if (err) console.log(err); 
    else { 
      files.forEach((file: string) => { 
        if (path2.extname(file) === `.${fileExtension}`) {
          console.log(file)
        }
      }) 
    } 
  }) 
}


filterFiles(dir, exten)

/*
// How its supposed to be done, in Javascript

const fs2 = require('fs')
const path = require('path')
    
const folder = process.argv[2]
const ext = '.' + process.argv[3]
    
fs2.readdir(folder, (err: any, files: any) => {
  if (err) return console.error(err)

  files.forEach((file: any) =>{
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})
*/