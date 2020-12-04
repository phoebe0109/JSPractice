var http = require('http');

let staticFile = (response, fname,mime) => {
  let fs = require('fs');

  fs.readFile(fname, (err, data) => {
    if (err) {
      console.log(`檔案讀取錯誤: ${err}`);
    }
    else {
      response.writeHead(200, {
        'Content-Type':mime

      });

      response.write(data);
      response.end();
    } // if
  });
} // staticFile()

http.createServer((request, response) => {
  request.on('data', (chunk) => {
    console.log(`data chunk: ${chunk}`);
  }).on('end', () => {
    let url = require('url');
    let pathname = url.parse(request.url).pathname;

    switch (pathname) {
      case '/':
        staticFile(response, '../htdocs/index.html','text/html');
        break;

      case'/assets/css/styles.css':
        staticFile(response,'../htdocs/assets/css/styles.css','text/css');
        break;

      case'/js/index.js':
        staticFile(response,'../htdocs/js/index.js','text/javascript');
        break;

      default:
        break;
    } // switch

    console.log(`Request for ${pathname}`);
  });
}).listen(8080);

// log message to Console
console.log('Server running at http://127.0.0.1:8080/');

// index.js.
