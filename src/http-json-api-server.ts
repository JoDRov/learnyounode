const http5 = require('http')
const url1 = require('url')

const server3 = http5.createServer((req: any, res: any) => {
  const parsedUrl = url1.parse(req.url, true)
  const { pathname, query } = parsedUrl

  if (req.method === 'GET') {
    if (pathname === '/api/parsetime') {
      if (query && query.iso) {
        const isoTime = new Date(query.iso)
        const jsonResponse = {
          hour: isoTime.getHours(),
          minute: isoTime.getMinutes(),
          second: isoTime.getSeconds(),
        };

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(jsonResponse))
      } else {
        res.writeHead(400, { 'Content-Type': 'text/plain' })
        res.end('Bad Request: Please provide a valid ISO time in the query string.')
      }
    }

    else if (pathname === '/api/unixtime') {
      if (query && query.iso) {
        const unixTime = new Date(query.iso).getTime()
        const jsonResponse = { unixtime: unixTime }

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(jsonResponse))
      } else {
        res.writeHead(400, { 'Content-Type': 'text/plain' })
        res.end('Bad Request: Please provide a valid ISO time in the query string.')
      }
    }

    else {
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.end('Not Found: Endpoint not supported.')
    }
  }

  else {
    res.writeHead(405, { 'Content-Type': 'text/plain' })
    res.end('Method Not Allowed: Only GET requests are supported.')
  }
})

const port1 = process.argv[2] || 3000

server3.listen(port1, () => {
  console.log(`Server listening on port ${port1}`)
})

/*
HOW IT'S SUPPOSED TO BE DONE

const http = require('http')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime: time.getTime() }
    }
    
    const server = http.createServer(function (req, res) {
      const parsedUrl = new URL(req.url, 'http://example.com')
      const time = new Date(parsedUrl.searchParams.get('iso'))
      let result
    
      if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time)
      } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time)
      }
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))
*/