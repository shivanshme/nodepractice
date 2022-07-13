const http = require("http");

const server = http.createServer((req, res) => {
    //console.log(req.url);
    res.end('hello from the other side Its shivansh here');   //default response if server is created
});
server.listen(8000, "127.0.0.1", () => {              //port and server
    console.log("listening at the port no 8000");       //logged in console
});