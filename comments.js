// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.
// The comments.html file should be in the same directory as the comments.js file.
// The server should respond to GET requests to the /comments URL.
// The server should respond with the contents of the comments.html file.
// The server should respond with a 404 status code if the file is not found.
// The server should respond with a 500 status code if there is an error reading the file.
// The server should respond with a 200 status code if the file is found and read successfully.
// The server should respond with the correct content type for the comments.html file.
// The server should respond with the correct content length for the comments.html file.
// The server should respond with the correct content for the comments.html file.
// The server should close the connection after sending the file.
// The server should log the request method and URL to the console.
// The server should log the response status code to the console.


const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);
    if (req.url === '/comments') {
        const filePath = path.join(__dirname, 'comments.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end();
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.setHeader('Content-Length', data.length);
                res.end(data);
            }
        });
    }
    else {
        res.statusCode = 404;
        res.end();
    }
}
);

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
}
);

// Path: comments.html
// Create a comments.html file that contains the following HTML code:
// <!DOCTYPE html>
// <html>
// <head>
// <title>Comments</title>
// </head>
// <body>
// <h1>Comments</h1>
// <p>Welcome to the comments page!</p>
// </body>
// </html>

// Run the comments.js file using the node command.
// Open a web browser and navigate to http://localhost:3000/comments.
// Verify that the comments.html file is displayed in the browser.
// Verify that the request method and URL are logged to the console.


