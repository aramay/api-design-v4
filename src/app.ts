const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");

app.get("/", (req, res) => {
    console.log("hello world");
    res.json({message: "hello world"})
    // res.send("hell world");
})

app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`)
})
module.exports = app;