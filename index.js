const http = require('node:http');
const fs = require('node:fs')

// Create a local server to receive data from
const server = http.createServer((req, res) => {

  let page 
  url = req.url
  switch(url) {
    case '/':
      page = 'index.html'
      break
    case '/about':
      page = 'about.html'
      break
    case 'contact':
      page = 'contact-me.html'
      break
    default:
      page = '404.html'
      break
  }

  const file = fs.readFileSync(page, 'utf8', (err) => {
    if (err) {
      console.log(err)
    }
  })

  res.writeHead(200, { 'Content-Type': 'text/html'});
  res.end(file)
});

server.listen(8000);