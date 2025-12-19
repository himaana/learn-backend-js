import { stat } from "fs";
import http from "http";

const server = http.createServer((req, res) => {
    let statusCode = 200;
    let message = "";
    if (req.url === "/") {
        message = "Home";
    } else if (req.url === "/about") {
        message = "About Page";
    } else {
        statusCode = 404;
        message = "404 Not Found";
    }
    res.writeHead(statusCode, { "Content-type": "text/plain" });
    res.end(message);
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
