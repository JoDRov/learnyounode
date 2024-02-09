const http2 = require("http")
const bl = require("bl")
const urls: string[] = [process.argv[2], process.argv[3], process.argv[4]]

let results: string[] = []
let count = 0

for (let i = 0; i < 3; i++){ // We call the function httpGet each time with a diferent url
    httpGet(i)
}
  
function httpGet (index: any) {
    http2.get(urls[index], (response: any) => {
        response.pipe(bl((err: any, data: any) => {
            if (err) return console.error(err)
  
            results[index] = data.toString()
            count++
  
            if (count > 2){
                for (var i = 0; i < 3; i++){
                    console.log(results[i])
                }
            }
        }))
    })
}