const fs = require('fs');
const http = require('http');
const url = require('url');

/*
// Blocking, synchronous way
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);
const textOut = `This is what we know about the avocado ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File has been written');

// Non-blocking, asynchronous way
 fs.readFile('./teext/start.txt', 'utf-8', (err, data1) => {
    if (err) return console.log("error");
   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
      console.log(data2);
      fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
         console.log(data3);
         fs.writeFile('./txt/final.txt', `${data2}\n\n${data3}`, 'utf-8', err => {
            console.log('Your file has been written');
         });
      });
   });
 });

 console.log('Will read file');
 */


// SERVER

const server = http.createServer( (req, res) => {
  const pathName = req.url;
  
  if(pathName === '/' || pathName === '/overview') {
    res.end('This is the OVERVIEW');
  } else if (pathName === '/product') {
    res.end('This is the PRODUCT');
  }
  
   res.end('Hello from the server!');
});

server.listen(8000, '127.0.0.1', () => {
   console.log('Listening to requests on port 8000');
});