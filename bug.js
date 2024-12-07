const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  doAsyncOperation().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  }).catch(error => {
    // Error handling is missing here! The server will crash silently.
    console.error('An error occurred:', error);
  });
});

function doAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a potential failure
    if (Math.random() < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});