# Silent Crash in Node.js Server Due to Unhandled Promise Rejection

This repository demonstrates a common but subtle bug in Node.js servers: silent crashes due to unhandled promise rejections in asynchronous operations.  The server lacks proper error handling, leading to unexpected termination without informative error messages.

## The Bug

The `bug.js` file contains a simple HTTP server that performs an asynchronous operation using `Promise`.  The problem is that the `.catch()` block is present but does not include proper error handling to prevent the server from crashing.  If the asynchronous operation fails, the server silently exits, leaving no trace of the error except for a potentially unhelpful message in the console.

## The Solution

The `bugSolution.js` file demonstrates the correct way to handle this situation. By using a process event listener for 'unhandledRejection' and/or properly handling the error within the promise's `.catch()` block, we ensure that the server doesn't crash and that we get a clear indication of the error.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`.
3. Observe that the server may crash silently (it will do so approximately 50% of the time).
4. Then, run `node bugSolution.js`, and you'll see that it handles errors gracefully and remains running.

This example highlights the importance of robust error handling in asynchronous Node.js applications.