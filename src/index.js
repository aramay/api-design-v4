const http = require("http");

let body = ""

const server = http.createServer(async (req, res) => {
    if (req.method === "GET" && req.url === "/") {
        // res.statusCode(200)
        res.writeHead(200, "OK")
        res.write("hello world", "utf8")
        res.end();
    }
})

server.on("data", (chunk) => {
    body += chunk
})

server.on("end", () => {
    console.log("body ", body)
})

server.on("error", (e) => {
    console.error("Error occured ", e)
})

server.listen(3001, () => {
    console.log(`Server listening on PORT http://localhost:3001`)
})
