import express from "express";
// const path = require("path");

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
    console.log("hello world");
    res.json({message: "hello world"})
    // res.send("hell world");
})

app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`)
})

// 

module.exports = app;