import { createServer } from "http";

const server = createServer((req, res) => {
    //console.log(req.url);
    if (req.url == "/") {
        res.end('hello from the other side Its shivansh here');  
    } else if (req.url == "/about") {
        res.end("Hello from about us side");
    }
    else if (req.url == "/contact") {
        res.end("Hello from about Contact us side");
    }
    else {
        res.writeHead(404, {"Content-type":"text/html"});
        res.end("<h1>404 page does not exits</h1>");
    }
     //default response if server is created
});
server.listen(8000, "127.0.0.1", () => {              //port and server
    console.log("listening at the port no 8000");       //logged in console
});