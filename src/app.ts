import express from "express";
import router from "./router";
import morgan from "morgan";
// const path = require("path");

const PORT = 3000;
const app = express();

app.use(morgan("dev"));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    console.log("hello world");
    res.json({message: "hello world"})
    // res.send("hell world");
})

app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`)
})

// 

module.exports = app;