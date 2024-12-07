const http = require('http');

const server = http.createServer((req, res) => {
  doAsyncOperation().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  }).catch(error => {
    // Proper error handling: Send an error response to the client
    console.error('An error occurred:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
});

function doAsyncOperation() {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}

// Add an unhandledRejection event listener (best practice)
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});